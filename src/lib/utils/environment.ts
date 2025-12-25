/**
 * Environment detection utilities
 */

import { env } from '@/env';

/**
 * Check if analytics should be enabled based on environment variable.
 * Defaults to enabled in production unless explicitly disabled.
 */
export const shouldEnableAnalytics =
  process.env.NODE_ENV === 'production' || env.ENABLE_ANALYTICS;
