/**
 * UI component constants and configurations
 * Button styles, skeleton variants, and component-specific settings
 */

import { UI_MESSAGES } from './shared';

/**
 * Button component configuration
 */
export const BUTTON_SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
} as const;

export const BUTTON_VARIANTS = {
  primary:
    'bg-gradient-to-r from-blue-accent to-purple-accent text-navy font-semibold hover:shadow-lg hover:shadow-blue-accent/25',
  secondary:
    'bg-navy-accent text-slate-light border border-slate-muted hover:bg-navy-light',
  ghost: 'text-slate-light hover:text-blue-accent hover:bg-navy-accent/20',
} as const;

export const BUTTON_BASE_CLASSES = `
  inline-flex items-center justify-center gap-2 rounded-xl
  transition-all duration-300 transform
  hover:scale-105 active:scale-95
  focus:outline-none focus:ring-2 focus:ring-blue-accent focus:ring-offset-2 focus:ring-offset-navy
` as const;

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
 * Error boundary configuration
 */
export const ERROR_MESSAGES = {
  DEFAULT_TITLE: UI_MESSAGES.ERROR_DEFAULT_TITLE,
  DEFAULT_DESCRIPTION: UI_MESSAGES.ERROR_DEFAULT_DESCRIPTION,
  BUTTON_REFRESH: UI_MESSAGES.ERROR_BUTTON_REFRESH,
  BUTTON_HOME: UI_MESSAGES.ERROR_BUTTON_HOME,
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
