import { z } from 'zod';

/**
 * Centralized validation schemas using Zod.
 * Re-exports schemas from constants for consistency.
 */
export { CONTACT_FORM_SCHEMA } from '../../constants/form-schemas';
export { GITHUB_REPO_SCHEMA } from '../config/github-config';

/**
 * Additional validation utilities.
 */
export const emailSchema = z.email('Please enter a valid email address.');

export const urlSchema = z.url('Please enter a valid URL.');

export const requiredStringSchema = (fieldName: string, minLength = 1) =>
  z.string().min(minLength, `${fieldName} is required.`);

/**
 * Validation helper functions.
 */
export const validateEmail = (email: string): boolean => {
  return emailSchema.safeParse(email).success;
};

export const validateUrl = (url: string): boolean => {
  return urlSchema.safeParse(url).success;
};
