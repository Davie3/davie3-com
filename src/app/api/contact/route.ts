import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { API_ERROR_MESSAGES } from '@/constants/config/api-error-messages';
import { EMAIL_CONFIG } from '@/constants/config/email-config';
import { CLOUDFLARE_API } from '@/constants/config/external-api-config';
import { getServerEnv } from '@/env';
import { formatEmailTimestamp } from '@/lib/utils/date-utils';
import { renderContactFormTemplate, generateContactFormText } from '@/lib/utils/email-template';
import { sanitizeInput } from '@/lib/utils/sanitize';
import { CONTACT_FORM_FIELDS, emailsMatch, EMAILS_MATCH_ERROR } from '@/types/form-types';

import type { NextRequest } from 'next/server';

// Server schema = the shared client fields plus the Turnstile token.
// Field validation lives in `@/types/form-types` (single source of truth).
const ContactFormSchema = CONTACT_FORM_FIELDS.extend({
  token: z.string().min(1, 'Turnstile token is required.'),
}).refine(emailsMatch, EMAILS_MATCH_ERROR);

const TurnstileResponseSchema = z.object({
  success: z.boolean(),
});

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

    const turnstileResponse = await fetch(CLOUDFLARE_API.TURNSTILE_VERIFY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: serverEnv.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

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
      subject: EMAIL_CONFIG.CONTACT_FORM.SUBJECT_TEMPLATE(sanitizedSubject, sanitizedName),
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
