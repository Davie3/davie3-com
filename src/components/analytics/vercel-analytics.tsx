'use client';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { JSX } from 'react';

/**
 * Vercel Analytics wrapper component
 * Environment gating handled at parent level (layout.tsx)
 * Vercel packages handle blocking gracefully with built-in error handling
 */
export function VercelAnalytics(): JSX.Element {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
