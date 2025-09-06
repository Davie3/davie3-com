import { z } from 'zod';

/**
 * Contact form validation schema
 */
export const CONTACT_FORM_SCHEMA = z
  .object({
    name: z
      .string()
      .min(2, 'Name must be at least 2 characters.')
      .max(100, 'Name must be less than 100 characters.'),
    email: z
      .email('Please enter a valid email address.')
      .max(254, 'Email address is too long.'),
    confirmEmail: z
      .email('Please enter a valid email address.')
      .max(254, 'Email address is too long.'),
    subject: z
      .string()
      .min(3, 'Subject must be at least 3 characters.')
      .max(200, 'Subject must be less than 200 characters.'),
    message: z
      .string()
      .min(10, 'Message must be at least 10 characters.')
      .max(2000, 'Message must be less than 2000 characters.'),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: 'Email addresses must match.',
    path: ['confirmEmail'],
  });

/**
 * Form-related type definitions.
 */
export type ContactFormValues = z.infer<typeof CONTACT_FORM_SCHEMA>;

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export type FormFieldError = {
  readonly message: string;
  readonly field: string;
};
