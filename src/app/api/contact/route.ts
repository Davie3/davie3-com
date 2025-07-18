import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn('SENDGRID_API_KEY is not set. Email sending will be disabled.');
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  if (!process.env.SENDGRID_API_KEY) {
    return NextResponse.json(
      { error: 'Email sending is not configured.' },
      { status: 500 },
    );
  }

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 },
      );
    }

    const msg = {
      to: process.env.SENDGRID_TO_EMAIL as string,
      from: process.env.SENDGRID_FROM_EMAIL as string,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 },
    );
  }
}
