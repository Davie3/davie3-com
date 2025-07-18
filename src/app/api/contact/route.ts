import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import sanitizeHtml from 'sanitize-html';
import xss from 'xss';

import { env } from '@/env';

sgMail.setApiKey(env.SENDGRID_API_KEY);

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
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
