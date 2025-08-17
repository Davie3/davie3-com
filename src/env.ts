import { z } from 'zod';

const envSchema = z.object({
  // Server-side
  TURNSTILE_SECRET_KEY: z.string().min(1, 'TURNSTILE_SECRET_KEY is required.'),
  SENDGRID_API_KEY: z.string().min(1, 'SENDGRID_API_KEY is required.'),
  SENDGRID_TO_EMAIL: z.email('Invalid SENDGRID_TO_EMAIL address.'),
  SENDGRID_FROM_EMAIL: z.email('Invalid SENDGRID_FROM_EMAIL address.'),

  // Client-side
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z
    .string()
    .min(1, 'NEXT_PUBLIC_TURNSTILE_SITE_KEY is required.'),
});

export const env = envSchema.parse(process.env);
