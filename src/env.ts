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
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().min(1).optional(),
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
const parsedEnv = clientEnvSchema.parse(process.env);

// Diagnostic logging to debug Turnstile test mode issue
console.log('🔍 ENV DEBUG - VERCEL_ENV:', process.env.VERCEL_ENV);
console.log('🔍 ENV DEBUG - NODE_ENV:', process.env.NODE_ENV);
console.log(
  '🔍 ENV DEBUG - Raw NEXT_PUBLIC_TURNSTILE_SITE_KEY from process.env:',
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    ? `${process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY.substring(0, 10)}...`
    : 'undefined',
);
console.log(
  '🔍 ENV DEBUG - parsedEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY:',
  parsedEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    ? `${parsedEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY.substring(0, 10)}...`
    : 'undefined',
);

// Use VERCEL_ENV to distinguish environments (not NODE_ENV which is always 'production' on Vercel)
// VERCEL_ENV values: 'production' | 'preview' | 'development' | undefined (local dev)
// See: https://vercel.com/docs/environment-variables/system-environment-variables
const isVercelDeployed =
  process.env.VERCEL_ENV === 'production' ||
  process.env.VERCEL_ENV === 'preview';

console.log('🔍 ENV DEBUG - isVercelDeployed:', isVercelDeployed);

export const env = {
  ...parsedEnv,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY:
    parsedEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY ??
    (isVercelDeployed ? '' : TURNSTILE_TEST_KEY), // Test key for local dev only
};

console.log(
  '🔍 ENV DEBUG - Final env.NEXT_PUBLIC_TURNSTILE_SITE_KEY:',
  env.NEXT_PUBLIC_TURNSTILE_SITE_KEY === TURNSTILE_TEST_KEY
    ? 'TEST KEY'
    : env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
      ? `${env.NEXT_PUBLIC_TURNSTILE_SITE_KEY.substring(0, 10)}...`
      : 'empty/undefined',
);

// Lazy validation for server env (call this in API routes)
export const getServerEnv = () => serverEnvSchema.parse(process.env);
