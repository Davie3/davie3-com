/**
 * Environment detection utilities
 */

import { env } from '@/env';

/**
 * Check if analytics should be enabled based on environment variable.
 * Defaults to enabled in production, disabled in development.
 * Can be overridden via NEXT_PUBLIC_ENABLE_ANALYTICS env var.
 */
export const shouldEnableAnalytics = env.NEXT_PUBLIC_ENABLE_ANALYTICS;
