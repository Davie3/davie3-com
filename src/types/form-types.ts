import { z } from 'zod';

import { CONTACT_FORM_CONSTRAINTS } from '@/constants/config/form-config';

/**
 * Base contact form field definitions (without cross-field refinement).
 *
 * Kept as a plain object schema so the server route can `.extend()` it with the
 * Turnstile token field. This is the single source of truth for the form's
 * field-level validation — both the client schema below and the API route
 * derive from it. See `src/app/api/contact/route.ts`.
 */
export const CONTACT_FORM_FIELDS = z.object({
  name: z
    .string()
    .min(CONTACT_FORM_CONSTRAINTS.NAME.MIN_LENGTH, 'Name must be at least 2 characters.')
    .max(CONTACT_FORM_CONSTRAINTS.NAME.MAX_LENGTH, 'Name must be less than 100 characters.'),
  email: z
    .email('Please enter a valid email address.')
    .max(CONTACT_FORM_CONSTRAINTS.EMAIL.MAX_LENGTH, 'Email address is too long.'),
  confirmEmail: z
    .email('Please enter a valid email address.')
    .max(CONTACT_FORM_CONSTRAINTS.EMAIL.MAX_LENGTH, 'Email address is too long.'),
  subject: z
    .string()
    .min(CONTACT_FORM_CONSTRAINTS.SUBJECT.MIN_LENGTH, 'Subject must be at least 3 characters.')
    .max(CONTACT_FORM_CONSTRAINTS.SUBJECT.MAX_LENGTH, 'Subject must be less than 200 characters.'),
  message: z
    .string()
    .min(CONTACT_FORM_CONSTRAINTS.MESSAGE.MIN_LENGTH, 'Message must be at least 10 characters.')
    .max(CONTACT_FORM_CONSTRAINTS.MESSAGE.MAX_LENGTH, 'Message must be less than 2000 characters.'),
});

/**
 * Shared refinement: the email and its confirmation must match.
 * Reused by both the client schema and the server route schema.
 */
export const emailsMatch = (data: { email: string; confirmEmail: string }): boolean =>
  data.email === data.confirmEmail;

export const EMAILS_MATCH_ERROR = {
  message: 'Email addresses must match.',
  path: ['confirmEmail'],
};

/**
 * Contact form validation schema (client-side).
 */
export const CONTACT_FORM_SCHEMA = CONTACT_FORM_FIELDS.refine(emailsMatch, EMAILS_MATCH_ERROR);

/**
 * Form-related type definitions.
 */
export type ContactFormValues = z.infer<typeof CONTACT_FORM_SCHEMA>;
