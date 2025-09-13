'use client';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useEffect, useState } from 'react';
import type { JSX } from 'react';

/**
 * Vercel Analytics wrapper component
 * Environment gating handled at parent level (layout.tsx)
 */
export function VercelAnalytics(): JSX.Element {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
