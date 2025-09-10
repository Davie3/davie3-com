'use client';

import Script from 'next/script';
import type { JSX } from 'react';

/**
 * CloudFlare Web Analytics component
 * Loads the CloudFlare analytics beacon script with the provided token
 */
export function CloudFlareAnalytics(): JSX.Element {
  return (
    <Script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "69a6fbe362714755b08c360c2d1e530e"}'
      strategy="afterInteractive"
      onError={(e) => {
        if (
          process.env.NODE_ENV === 'development' ||
          process.env.VERCEL_ENV === 'preview'
        ) {
          console.warn('Cloudflare Analytics failed to load:', e);
        }
      }}
    />
  );
}
