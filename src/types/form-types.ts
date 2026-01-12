import { z } from 'zod';

import { CONTACT_FORM_CONSTRAINTS } from '@/constants/config/form-config';

/**
 * Contact form validation schema
 */
export const CONTACT_FORM_SCHEMA = z
  .object({
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
      .max(
        CONTACT_FORM_CONSTRAINTS.SUBJECT.MAX_LENGTH,
        'Subject must be less than 200 characters.',
      ),
    message: z
      .string()
      .min(CONTACT_FORM_CONSTRAINTS.MESSAGE.MIN_LENGTH, 'Message must be at least 10 characters.')
      .max(
        CONTACT_FORM_CONSTRAINTS.MESSAGE.MAX_LENGTH,
        'Message must be less than 2000 characters.',
      ),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: 'Email addresses must match.',
    path: ['confirmEmail'],
  });

/**
 * Form-related type definitions.
 */
export type ContactFormValues = z.infer<typeof CONTACT_FORM_SCHEMA>;
