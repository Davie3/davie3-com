'use client';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useEffect, useState } from 'react';
import type { JSX } from 'react';

/**
 * Vercel Analytics wrapper component with environment gating
 * Only loads in production environment for optimal performance
 */
export function VercelAnalytics(): JSX.Element {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only load analytics in production environment
  if (process.env.VERCEL_ENV !== 'production') {
    return <></>;
  }

  if (!mounted) {
    return <></>;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
