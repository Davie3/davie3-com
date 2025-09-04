import { z } from 'zod';

/**
 * Form validation schemas and related constants.
 */
export const CONTACT_FORM_SCHEMA = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name must be less than 100 characters.'),
  email: z
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
});

export const FORM_MESSAGES = {
  SUCCESS: "Thank you for your message! I'll get back to you soon.",
  ERROR: 'There was an error sending your message. Please try again.',
  SUBMITTING: 'Sending...',
  SUBMIT: 'Send Message',
} as const;
