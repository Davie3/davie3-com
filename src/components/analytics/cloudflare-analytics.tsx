'use client';

import Script from 'next/script';
import type { JSX } from 'react';

/**
 * CloudFlare Web Analytics component
 * Environment gating handled at parent level (layout.tsx)
 * Error handling prevents console errors when blocked by browser extensions
 */
export function CloudFlareAnalytics(): JSX.Element {
  const handleError = () => {
    // Silently fail - analytics blocking is expected user behavior
    // Script errors are suppressed to avoid console clutter
  };

  return (
    <Script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "69a6fbe362714755b08c360c2d1e530e"}'
      strategy="lazyOnload"
      onError={handleError}
    />
  );
}
