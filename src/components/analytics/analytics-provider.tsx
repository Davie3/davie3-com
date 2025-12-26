'use client';

import { useDetectAdBlock } from 'adblock-detect-react';
import type { JSX } from 'react';

import { CloudFlareAnalytics } from '@/components/analytics/cloudflare-analytics';
import { VercelAnalytics } from '@/components/analytics/vercel-analytics';

/**
 * Analytics provider with proactive ad blocker detection.
 * Only renders analytics when no ad blocker detected.
 * Error suppression in individual components acts as fallback.
 */
export function AnalyticsProvider(): JSX.Element | null {
  const adBlockDetected = useDetectAdBlock();

  if (adBlockDetected) {
    return null;
  }

  return (
    <>
      <CloudFlareAnalytics />
      <VercelAnalytics />
    </>
  );
}
