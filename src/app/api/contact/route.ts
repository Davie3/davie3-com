import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import sanitizeHtml from 'sanitize-html';
import xss from 'xss';
import { env } from '@/env';
import { formatEmailTimestamp } from '@/lib/utils/date-utils';
import {
  renderContactFormTemplate,
  generateContactFormText,
} from '@/lib/utils/email-template';

sgMail.setApiKey(env.SENDGRID_API_KEY);

const TURNSTILE_VERIFY_ENDPOINT =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * Sanitizes user input to prevent XSS attacks
 * @param input - The string to sanitize
 * @returns Sanitized string safe for use in emails and responses
 */
function sanitizeInput(input: string): string {
  return xss(sanitizeHtml(input));
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, subject, message, token } = await request.json();

    if (!name || !email || !subject || !message || !token) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 },
      );
    }

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

    const turnstileData = await turnstileResponse.json();

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
