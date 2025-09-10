import type { Metadata } from 'next';
import type { JSX } from 'react';

import { CloudFlareAnalytics } from '@/components/analytics/cloudflare-analytics';
import { VercelAnalytics } from '@/components/analytics/vercel-analytics';
import { AppFooter } from '@/components/layout/app-footer';
import { StructuredData } from '@/components/seo/structured-data';
import { ClientLayout } from '@/components/ui/client-layout';
import { SITE_METADATA } from '@/lib/config/site-metadata';
import { fontVariables } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = SITE_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <StructuredData pageType="website" />
        {/* Preconnect hints for analytics domains (production only) */}
        {process.env.VERCEL_ENV === 'production' && (
          <>
            <link
              rel="preconnect"
              href="https://static.cloudflareinsights.com"
              crossOrigin="anonymous"
            />
            <link
              rel="preconnect"
              href="https://vitals.vercel-insights.com"
              crossOrigin="anonymous"
            />
            <link
              rel="preconnect"
              href="https://vitals.vercel-analytics.com"
              crossOrigin="anonymous"
            />
          </>
        )}
      </head>
      <body
        className={`${fontVariables} antialiased pt-16 bg-black text-white`}
      >
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-accent focus:text-navy focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <ClientLayout>{children}</ClientLayout>
        <AppFooter />
        <CloudFlareAnalytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
