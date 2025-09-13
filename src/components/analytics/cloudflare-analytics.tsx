'use client';

import Script from 'next/script';
import type { JSX } from 'react';

/**
 * CloudFlare Web Analytics component
 * Loads in all environments for testing and monitoring
 */
export function CloudFlareAnalytics(): JSX.Element {
  return (
    <Script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "69a6fbe362714755b08c360c2d1e530e"}'
      strategy="lazyOnload"
    />
  );
}
