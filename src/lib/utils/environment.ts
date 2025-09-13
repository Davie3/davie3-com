/**
 * Environment detection utilities
 * Provides consistent environment checking across the application
 */

import { env } from '@/env';

/**
 * Check if the application is running in production environment
 * Returns true for both Vercel production and standard NODE_ENV production
 */
export const isProduction =
  process.env.VERCEL_ENV === 'production' ||
  process.env.NODE_ENV === 'production';

/**
 * Check if analytics should be enabled
 * Always enabled in production, optionally enabled in non-prod via ENABLE_ANALYTICS
 */
export const shouldEnableAnalytics =
  isProduction || env.ENABLE_ANALYTICS === true;

/**
 * Check if the application is running in development environment
 * Returns true for both Vercel development and standard NODE_ENV development
 */
export const isDevelopment =
  process.env.VERCEL_ENV === 'development' ||
  process.env.NODE_ENV === 'development';

/**
 * Check if the application is running in preview/staging environment
 * Returns true for Vercel preview deployments or when not in production/development
 */
export const isPreview =
  process.env.VERCEL_ENV === 'preview' || (!isProduction && !isDevelopment);

/**
 * Get the current environment name
 * Returns a standardized environment string
 */
export const getEnvironment = (): 'production' | 'development' | 'preview' => {
  if (isProduction) return 'production';
  if (isDevelopment) return 'development';
  return 'preview';
};

/**
 * Environment information object
 * Useful for debugging and logging
 */
export const environment = {
  isProduction,
  isDevelopment,
  isPreview,
  shouldEnableAnalytics,
  name: getEnvironment(),
  vercelEnv: process.env.VERCEL_ENV,
  nodeEnv: process.env.NODE_ENV,
  enableAnalytics: env.ENABLE_ANALYTICS,
} as const;
