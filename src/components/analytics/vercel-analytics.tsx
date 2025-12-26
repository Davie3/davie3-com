'use client';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useEffect } from 'react';
import type { JSX } from 'react';

/**
 * Vercel Analytics wrapper component
 * Environment gating handled at parent level (layout.tsx)
 * Suppresses console errors when scripts are blocked by browser extensions
 */
export function VercelAnalytics(): JSX.Element {
  useEffect(() => {
    // Suppress network errors from analytics scripts being blocked
    const handleError = (event: ErrorEvent) => {
      const url = event.filename || '';
      if (
        url.includes('/_vercel/insights/') ||
        url.includes('/_vercel/speed-insights/') ||
        url.includes('vercel-analytics') ||
        url.includes('vercel-insights')
      ) {
        event.preventDefault();
        event.stopPropagation();
        return true;
      }
      return false;
    };

    // Suppress network resource errors (ERR_BLOCKED_BY_CLIENT)
    const handleResourceError = (event: Event) => {
      const target = event.target;

      // Type guard: validates both null and correct element type
      if (target instanceof HTMLScriptElement) {
        if (target.src.includes('/_vercel/')) {
          event.preventDefault();
          event.stopPropagation();
          return true;
        }
      }

      return false;
    };

    window.addEventListener('error', handleError);
    window.addEventListener('error', handleResourceError, true);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('error', handleResourceError, true);
    };
  }, []);

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
