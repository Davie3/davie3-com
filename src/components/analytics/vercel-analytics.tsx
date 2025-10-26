'use client';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useState } from 'react';
import type { JSX } from 'react';

/**
 * Vercel Analytics wrapper component
 * Environment gating handled at parent level (layout.tsx)
 */
export function VercelAnalytics(): JSX.Element {
  // Initialize as mounted on client - analytics only render client-side anyway
  const [mounted] = useState(true);

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
