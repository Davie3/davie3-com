/**
 * Environment detection utilities
 */

import { env } from '@/env';

/**
 * Check if analytics should be enabled based on environment variable.
 */
export const shouldEnableAnalytics = env.ENABLE_ANALYTICS;
