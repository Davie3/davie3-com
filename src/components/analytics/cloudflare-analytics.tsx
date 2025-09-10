'use client';

import Script from 'next/script';
import type { JSX } from 'react';

/**
 * CloudFlare Web Analytics component
 * Only loads in production environment for optimal performance
 */
export function CloudFlareAnalytics(): JSX.Element {
  // Only load analytics in production environment
  if (process.env.VERCEL_ENV !== 'production') {
    return <></>;
  }

  return (
    <Script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "69a6fbe362714755b08c360c2d1e530e"}'
      strategy="lazyOnload"
    />
  );
}
