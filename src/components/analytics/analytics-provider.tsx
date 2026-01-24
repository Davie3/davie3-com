'use client';

import { useDetectAdBlock } from 'adblock-detect-react';

import { CloudFlareAnalytics } from '@/components/analytics/cloudflare-analytics';
import { VercelAnalytics } from '@/components/analytics/vercel-analytics';

import type { JSX } from 'react';

/**
 * Analytics provider with ad blocker detection.
 * Conditionally renders analytics components based on blocker detection.
 * Error suppression in individual components acts as defense-in-depth fallback.
 */
export function AnalyticsProvider(): JSX.Element | null {
  const adBlockDetected = useDetectAdBlock();

  // Don't render if ad blocker is detected
  if (adBlockDetected) {
    return null;
  }

  // No blocker detected - render analytics
  return (
    <>
      <CloudFlareAnalytics />
      <VercelAnalytics />
    </>
  );
}
