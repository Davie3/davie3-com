'use client';

import { useDetectAdBlock } from 'adblock-detect-react';
import { useEffect } from 'react';
import type { JSX } from 'react';

import { CloudFlareAnalytics } from '@/components/analytics/cloudflare-analytics';
import { VercelAnalytics } from '@/components/analytics/vercel-analytics';

/**
 * Analytics provider with proactive ad blocker detection.
 * Only renders analytics when no ad blocker detected.
 * Error suppression in individual components acts as fallback.
 *
 * DEBUG: Console logging added to diagnose detection timing issues.
 */
export function AnalyticsProvider(): JSX.Element | null {
  const adBlockDetected = useDetectAdBlock();

  useEffect(() => {
    console.log('[AnalyticsProvider] Detection result:', {
      adBlockDetected,
      type: typeof adBlockDetected,
      willRender: !adBlockDetected,
    });
  }, [adBlockDetected]);

  console.log('[AnalyticsProvider] Render -', { adBlockDetected });

  if (adBlockDetected) {
    console.log('[AnalyticsProvider] Blocking analytics');
    return null;
  }

  console.log('[AnalyticsProvider] Loading analytics');
  return (
    <>
      <CloudFlareAnalytics />
      <VercelAnalytics />
    </>
  );
}
