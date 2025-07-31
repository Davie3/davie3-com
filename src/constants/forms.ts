import { z } from 'zod';

/**
 * Form validation schemas and related constants.
 */
export const CONTACT_FORM_SCHEMA = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormValues = z.infer<typeof CONTACT_FORM_SCHEMA>;

export const FORM_MESSAGES = {
  SUCCESS: "Thank you for your message! I'll get back to you soon.",
  ERROR: 'There was an error sending your message. Please try again.',
  SUBMITTING: 'Sending...',
  SUBMIT: 'Send Message',
} as const;
