/**
 * Environment detection utilities
 * Provides consistent environment checking across the application
 */

import { env } from '@/env';

/**
 * Check if the application is running in production environment
 * Returns true for both Vercel production and standard NODE_ENV production
 */
const isProduction =
  process.env.VERCEL_ENV === 'production' ||
  process.env.NODE_ENV === 'production';

/**
 * Check if analytics should be enabled
 * Always enabled in production, optionally enabled in non-prod via ENABLE_ANALYTICS
 */
export const shouldEnableAnalytics =
  isProduction || env.ENABLE_ANALYTICS === true;
