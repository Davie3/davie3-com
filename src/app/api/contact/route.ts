import sgMail from '@sendgrid/mail';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import sanitizeHtml from 'sanitize-html';
import xss from 'xss';
import { z } from 'zod';
import { CLOUDFLARE_API } from '@/constants/config/external-api-config';
import { getServerEnv } from '@/env';
import { formatEmailTimestamp } from '@/lib/utils/date-utils';
import {
  renderContactFormTemplate,
  generateContactFormText,
} from '@/lib/utils/email-template';
import { API_ERROR_MESSAGES } from '@/constants/config/api-error-messages';
import { EMAIL_CONFIG } from '@/constants/config/email-config';
import { CONTACT_FORM_CONSTRAINTS } from '@/constants/config/form-config';

// Build schema without refine to allow extension
const ContactFormSchema = z
  .object({
    name: z
      .string()
      .min(
        CONTACT_FORM_CONSTRAINTS.NAME.MIN_LENGTH,
        'Name must be at least 2 characters.',
      )
      .max(
        CONTACT_FORM_CONSTRAINTS.NAME.MAX_LENGTH,
        'Name must be less than 100 characters.',
      ),
    email: z
      .email('Please enter a valid email address.')
      .max(
        CONTACT_FORM_CONSTRAINTS.EMAIL.MAX_LENGTH,
        'Email address is too long.',
      ),
    confirmEmail: z
      .email('Please enter a valid email address.')
      .max(
        CONTACT_FORM_CONSTRAINTS.EMAIL.MAX_LENGTH,
        'Email address is too long.',
      ),
    subject: z
      .string()
      .min(
        CONTACT_FORM_CONSTRAINTS.SUBJECT.MIN_LENGTH,
        'Subject must be at least 3 characters.',
      )
      .max(
        CONTACT_FORM_CONSTRAINTS.SUBJECT.MAX_LENGTH,
        'Subject must be less than 200 characters.',
      ),
    message: z
      .string()
      .min(
        CONTACT_FORM_CONSTRAINTS.MESSAGE.MIN_LENGTH,
        'Message must be at least 10 characters.',
      )
      .max(
        CONTACT_FORM_CONSTRAINTS.MESSAGE.MAX_LENGTH,
        'Message must be less than 2000 characters.',
      ),
    token: z.string().min(1, 'Turnstile token is required.'),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: 'Email addresses must match.',
    path: ['confirmEmail'],
  });

const TurnstileResponseSchema = z.object({
  success: z.boolean(),
});

/**
 * Sanitizes user input to prevent XSS attacks and HTML injection
 * @param input - The string to sanitize
 * @returns Sanitized string safe for use in emails and responses
 */
function sanitizeInput(input: string): string {
  // First pass: strip all HTML tags
  const htmlStripped = sanitizeHtml(input, {
    allowedTags: [], // No HTML tags allowed
    allowedAttributes: {}, // No attributes allowed
    disallowedTagsMode: 'discard', // Remove disallowed tags entirely
    allowedSchemes: [], // No URL schemes allowed
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: [],
    allowProtocolRelative: false,
    enforceHtmlBoundary: false,
  });

  // Second pass: additional XSS protection
  return xss(htmlStripped, {
    allowList: {}, // No tags allowed
    stripIgnoreTag: true,
    stripIgnoreTagBody: ['script'],
  }).trim();
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Validate server environment variables
    const serverEnv = getServerEnv();
    sgMail.setApiKey(serverEnv.SENDGRID_API_KEY);

    const body: unknown = await request.json();
    const validationResult = ContactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: API_ERROR_MESSAGES.CONTACT_FORM.MISSING_FIELDS },
        { status: 400 },
      );
    }

    const { name, email, subject, message, token } = validationResult.data;

    const turnstileResponse = await fetch(
      CLOUDFLARE_API.TURNSTILE_VERIFY_ENDPOINT,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: serverEnv.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      },
    );

    const turnstileBody: unknown = await turnstileResponse.json();
    const turnstileData = TurnstileResponseSchema.parse(turnstileBody);

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: API_ERROR_MESSAGES.CONTACT_FORM.INVALID_CAPTCHA },
        { status: 400 },
      );
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    const timestamp = formatEmailTimestamp();

    const templateData = {
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      timestamp,
    };

    const msg = {
      to: serverEnv.SENDGRID_TO_EMAIL,
      from: serverEnv.SENDGRID_FROM_EMAIL,
      replyTo: sanitizedEmail,
      subject: EMAIL_CONFIG.CONTACT_FORM.SUBJECT_TEMPLATE(
        sanitizedSubject,
        sanitizedName,
      ),
      text: generateContactFormText(templateData),
      html: renderContactFormTemplate(templateData),
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: API_ERROR_MESSAGES.CONTACT_FORM.SEND_FAILED },
      { status: 500 },
    );
  }
}
