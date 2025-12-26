import { z } from 'zod';

/**
 * Cloudflare Turnstile test key for local development
 * @see https://developers.cloudflare.com/turnstile/troubleshooting/testing/
 */
const TURNSTILE_TEST_KEY = '1x00000000000000000000AA';

/**
 * Server-side environment variables schema
 * These are private and only accessible on the server (API routes, server components)
 */
const serverSchema = z.object({
  TURNSTILE_SECRET_KEY: z.string().min(1, 'TURNSTILE_SECRET_KEY is required'),
  SENDGRID_API_KEY: z.string().min(1, 'SENDGRID_API_KEY is required'),
  SENDGRID_TO_EMAIL: z.email('Invalid SENDGRID_TO_EMAIL address'),
  SENDGRID_FROM_EMAIL: z.email('Invalid SENDGRID_FROM_EMAIL address'),
});

/**
 * Client-side environment variables schema (NEXT_PUBLIC_*)
 * These are public and exposed to the browser
 */
const clientSchema = z.object({
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
  NEXT_PUBLIC_ENABLE_ANALYTICS: z.string().optional(),
  NEXT_PUBLIC_VERCEL_ENV: z
    .enum(['production', 'preview', 'development'])
    .optional(),
});

/**
 * Validate client environment variables at build time
 * If validation fails, the build will crash, preventing broken deployments
 */
clientSchema.parse(process.env);

/**
 * Public environment variables for client-side use
 * Next.js inlines these values at build time, so we access process.env directly
 */
export const env = {
  NEXT_PUBLIC_TURNSTILE_SITE_KEY:
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? TURNSTILE_TEST_KEY,

  NEXT_PUBLIC_ENABLE_ANALYTICS:
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true' ||
    (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === undefined &&
      (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ||
        process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview')),
} as const;

/**
 * Server-side environment variables getter
 * Call this in API routes or server components to access private env vars
 * @throws {ZodError} if environment variables are invalid
 */
export function getServerEnv() {
  if (typeof window !== 'undefined') {
    throw new Error('getServerEnv should only be called on the server');
  }
  return serverSchema.parse(process.env);
}
