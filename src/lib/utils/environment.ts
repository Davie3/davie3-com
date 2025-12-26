/**
 * Environment detection utilities
 */

import { env } from '@/env';

/**
 * Check if analytics should be enabled based on environment variable.
 *
 * Two-layer analytics control:
 * 1. shouldEnableAnalytics === true (env var - this layer)
 * 2. No ad blocker detected (AnalyticsProvider - runtime check)
 *
 * Both must be true for analytics to load.
 *
 * Defaults to enabled in production, disabled in development.
 * Can be overridden via NEXT_PUBLIC_ENABLE_ANALYTICS env var.
 */
export const shouldEnableAnalytics = env.NEXT_PUBLIC_ENABLE_ANALYTICS;
