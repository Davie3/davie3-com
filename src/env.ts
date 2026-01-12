import { z } from 'zod';

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
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z
    .string()
    .min(1, 'NEXT_PUBLIC_TURNSTILE_SITE_KEY is required for production'),
  NEXT_PUBLIC_ENABLE_ANALYTICS: z.string().optional(),
  NEXT_PUBLIC_VERCEL_ENV: z.enum(['production', 'preview', 'development']).optional(),
});

/**
 * Infer client environment variable types from schema
 * Reflects validated shape where required fields are guaranteed to exist
 */
type ClientParsedEnv = z.infer<typeof clientSchema>;

/**
 * Validate client environment variables at build time
 * Only runs server-side (during build), not in browser where process.env is empty
 * If validation fails, the build will crash, preventing broken deployments
 */
if (typeof window === 'undefined') {
  clientSchema.parse(process.env);
}

/**
 * Type-asserted process.env for cleaner access to validated environment variables
 * The validation above guarantees these values match the ClientParsedEnv type
 */
const validatedProcessEnv = process.env as unknown as ClientParsedEnv;

/**
 * Public environment variables for client-side use
 * Next.js inlines these values at build time by detecting direct process.env access
 */
export const env = {
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: validatedProcessEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY,

  NEXT_PUBLIC_ENABLE_ANALYTICS:
    validatedProcessEnv.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true' ||
    (validatedProcessEnv.NEXT_PUBLIC_ENABLE_ANALYTICS === undefined &&
      (validatedProcessEnv.NEXT_PUBLIC_VERCEL_ENV === 'production' ||
        validatedProcessEnv.NEXT_PUBLIC_VERCEL_ENV === 'preview')),
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
