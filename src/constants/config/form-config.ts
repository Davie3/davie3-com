/**
 * Form configuration
 * Validation constraints and limits for form inputs
 */

export const CONTACT_FORM_CONSTRAINTS = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  },
  EMAIL: {
    MAX_LENGTH: 254,
  },
  SUBJECT: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 200,
  },
  MESSAGE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 2000,
  },
} as const;
