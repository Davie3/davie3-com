/**
 * UI component constants and configurations
 * Button styles, skeleton variants, and component-specific settings
 */

import { UI_MESSAGES } from './shared';

/**
 * Skeleton component configuration
 */
export const SKELETON_BASE_CLASSES =
  'animate-pulse bg-gradient-to-r from-navy-light to-navy-accent' as const;

export const SKELETON_VARIANTS = {
  text: 'h-4 w-full',
  circular: 'rounded-full',
  rectangular: 'rounded-lg',
  card: 'rounded-xl h-48',
} as const;

/**
 * Form messages configuration
 */
export const FORM_MESSAGES = {
  SUCCESS: UI_MESSAGES.FORM_SUCCESS,
  ERROR: UI_MESSAGES.FORM_ERROR,
  SUBMITTING: UI_MESSAGES.FORM_SUBMITTING,
  SUBMIT: UI_MESSAGES.FORM_SUBMIT,
} as const;

/**
 * Footer component configuration
 */
export const FOOTER_CONFIG = {
  STARTING_YEAR: 2025,
  ANIMATION_DELAY: 2000,
  ICON_SIZE: 24,
} as const;
