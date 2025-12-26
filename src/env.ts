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
  ENABLE_ANALYTICS: z
    .string()
    .optional()
    .transform((val) => val === 'true'),
});

// Validate and apply defaults
const parsedEnv = clientEnvSchema.parse(process.env);

// Use VERCEL_ENV to distinguish environments (not NODE_ENV which is always 'production' on Vercel)
// VERCEL_ENV values: 'production' | 'preview' | 'development' | undefined (local dev)
// See: https://vercel.com/docs/environment-variables/system-environment-variables
const isVercelProduction = process.env.VERCEL_ENV === 'production';

export const env = {
  ...parsedEnv,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY:
    parsedEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY ??
    (isVercelProduction ? '' : TURNSTILE_TEST_KEY), // Test key for dev/preview, empty for production
};

// Lazy validation for server env (call this in API routes)
export const getServerEnv = () => serverEnvSchema.parse(process.env);
