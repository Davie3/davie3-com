/**
 * UI component constants and configurations
 */

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
  DEFAULT_TITLE: 'Something went wrong',
  DEFAULT_DESCRIPTION:
    'An unexpected error occurred. Please try refreshing the page.',
  BUTTON_REFRESH: 'Refresh Page',
  BUTTON_HOME: 'Go Home',
} as const;
