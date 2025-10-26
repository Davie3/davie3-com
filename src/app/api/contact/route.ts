import sgMail from '@sendgrid/mail';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import sanitizeHtml from 'sanitize-html';
import xss from 'xss';
import { z } from 'zod';
import { env } from '@/env';
import { formatEmailTimestamp } from '@/lib/utils/date-utils';
import {
  renderContactFormTemplate,
  generateContactFormText,
} from '@/lib/utils/email-template';
import { CONTACT_FORM_SCHEMA } from '@/types/form-types';

sgMail.setApiKey(env.SENDGRID_API_KEY);

const TURNSTILE_VERIFY_ENDPOINT =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const ContactFormSchema = CONTACT_FORM_SCHEMA.safeExtend({
  token: z.string().min(1, 'Turnstile token is required.'),
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
    const body: unknown = await request.json();
    const validationResult = ContactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { errors: validationResult.error.flatten().fieldErrors },
        { status: 400 },
      );
    }
    }

    const { name, email, subject, message, token } = validationResult.data;

    const turnstileResponse = await fetch(TURNSTILE_VERIFY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const turnstileBody: unknown = await turnstileResponse.json();
    const turnstileData = TurnstileResponseSchema.parse(turnstileBody);

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: 'Invalid CAPTCHA. Please try again.' },
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
      to: env.SENDGRID_TO_EMAIL,
      from: env.SENDGRID_FROM_EMAIL,
      replyTo: sanitizedEmail,
      subject: `💬 Contact: ${sanitizedSubject} - from ${sanitizedName}`,
      text: generateContactFormText(templateData),
      html: renderContactFormTemplate(templateData),
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 },
    );
  }
}
