import { z } from 'zod';

// Cloudflare Turnstile test key for local development
// See: https://developers.cloudflare.com/turnstile/troubleshooting/testing/
const TURNSTILE_TEST_KEY = '1x00000000000000000000AA';

// Server-side environment variables (only validated in API routes)
const serverEnvSchema = z.object({
  TURNSTILE_SECRET_KEY: z.string().min(1, 'TURNSTILE_SECRET_KEY is required.'),
  SENDGRID_API_KEY: z.string().min(1, 'SENDGRID_API_KEY is required.'),
  SENDGRID_TO_EMAIL: z.email('Invalid SENDGRID_TO_EMAIL address.'),
  SENDGRID_FROM_EMAIL: z.email('Invalid SENDGRID_FROM_EMAIL address.'),
});

// Client-side environment variables (validated on import)
const clientEnvSchema = z.object({
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
  NEXT_PUBLIC_ENABLE_ANALYTICS: z
    .string()
    .optional()
    .default(
      process.env.VERCEL_ENV === 'production' ||
        process.env.VERCEL_ENV === 'preview'
        ? 'true'
        : 'false',
    )
    .transform((val) => val === 'true'),
});

// Validate and apply defaults
console.log(
  '🔍 ENV DEBUG - When is this running? typeof window:',
  typeof window,
);
console.log(
  '🔍 ENV DEBUG - NEXT_PUBLIC_TURNSTILE_SITE_KEY value:',
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.substring(0, 15) || 'undefined',
);
console.log(
  '🔍 ENV DEBUG - NEXT_PUBLIC_TURNSTILE_SITE_KEY type:',
  typeof process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
);
const parsedEnv = clientEnvSchema.parse(process.env);
console.log(
  '🔍 ENV DEBUG - After Zod parse:',
  parsedEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.substring(0, 15) || 'undefined',
);

export const env = {
  ...parsedEnv,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY:
    parsedEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? TURNSTILE_TEST_KEY,
};

// Lazy validation for server env (call this in API routes)
export const getServerEnv = () => serverEnvSchema.parse(process.env);
