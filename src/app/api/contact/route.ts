import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import sanitizeHtml from 'sanitize-html';
import xss from 'xss';

import { env } from '@/env';

sgMail.setApiKey(env.SENDGRID_API_KEY);

const TURNSTILE_VERIFY_ENDPOINT =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, message, token } = await request.json();

    if (!name || !email || !message || !token) {
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

    const sanitizedName = xss(sanitizeHtml(name));
    const sanitizedEmail = xss(sanitizeHtml(email));
    const sanitizedMessage = xss(sanitizeHtml(message));

    const msg = {
      to: env.SENDGRID_TO_EMAIL,
      from: env.SENDGRID_FROM_EMAIL,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
      html: `<p><strong>Name:</strong> ${sanitizedName}</p><p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p><p><strong>Message:</strong></p><p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>`,
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
