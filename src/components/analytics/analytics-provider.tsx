import { CloudFlareAnalytics } from '@/components/analytics/cloudflare-analytics';
import { VercelAnalytics } from '@/components/analytics/vercel-analytics';

import type { JSX } from 'react';

/**
 * Analytics provider.
 * Renders analytics components unconditionally; each child suppresses its own
 * blocked-script errors, so a blocked beacon fails silently without disabling
 * the others. Environment gating is handled at the parent level (layout.tsx).
 */
export function AnalyticsProvider(): JSX.Element {
  return (
    <>
      <CloudFlareAnalytics />
      <VercelAnalytics />
    </>
  );
}
