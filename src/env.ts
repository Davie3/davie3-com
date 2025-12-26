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

// Client-side environment variables
// NOTE: We access process.env.NEXT_PUBLIC_* directly (not through Zod parsing) because
// when client components import this file, it re-evaluates in the browser where Zod
// loses build-time values. Direct access ensures Next.js can inline the literal values.
//
// We still validate with Zod at build time to catch missing vars early:
if (process.env.NODE_ENV !== 'test') {
  z.object({
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
    NEXT_PUBLIC_ENABLE_ANALYTICS: z.string().optional(),
  }).parse(process.env);
}

// Export env object using process.env directly for proper Next.js inlining
export const env = {
  // Turnstile: use real key if set, otherwise use test key for local dev
  NEXT_PUBLIC_TURNSTILE_SITE_KEY:
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? TURNSTILE_TEST_KEY,

  // Analytics: enable in Preview and Production, disable in local dev
  // VERCEL_ENV is server-side only, so we check if we're on Vercel using NEXT_PUBLIC_VERCEL_ENV
  NEXT_PUBLIC_ENABLE_ANALYTICS:
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true' ||
    (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === undefined &&
      (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ||
        process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview')),
};

// Lazy validation for server env (call this in API routes)
export const getServerEnv = () => serverEnvSchema.parse(process.env);
