import type { z } from 'zod';
import type { CONTACT_FORM_SCHEMA } from '../constants/form-schemas';

/**
 * Form-related type definitions.
 */
export type ContactFormValues = z.infer<typeof CONTACT_FORM_SCHEMA>;

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export type FormFieldError = {
  readonly message: string;
  readonly field: string;
};
