'use client';

import { useDetectAdBlock } from 'adblock-detect-react';
import { useEffect, useState } from 'react';
import type { JSX } from 'react';

import { CloudFlareAnalytics } from '@/components/analytics/cloudflare-analytics';
import { VercelAnalytics } from '@/components/analytics/vercel-analytics';

/**
 * Analytics provider with proactive ad blocker detection.
 * Waits for detection to complete before rendering analytics.
 * Only renders AFTER detection finishes AND no blocker found.
 *
 * Uses memoized state to delay rendering until detection completes, preventing
 * the race condition where scripts load during initial false render.
 *
 * Error suppression in individual components acts as defense-in-depth fallback.
 */
export function AnalyticsProvider(): JSX.Element | null {
  const adBlockDetected = useDetectAdBlock();
  // Track if detection has ever completed (false → true/false transition)
  const [detectionComplete, setDetectionComplete] = useState(adBlockDetected);

  // Synchronize detectionComplete with adBlockDetected changes
  useEffect(() => {
    setDetectionComplete(adBlockDetected);
  }, [adBlockDetected]);

  // Don't render until detection completes AND no blocker found
  if (!detectionComplete && !adBlockDetected) {
    return null; // Still detecting
  }

  if (adBlockDetected) {
    return null; // Blocker detected, don't load analytics
  }

  // Detection complete, no blocker - safe to load analytics
  return (
    <>
      <CloudFlareAnalytics />
      <VercelAnalytics />
    </>
  );
}
