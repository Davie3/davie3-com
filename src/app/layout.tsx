import { AnalyticsProvider } from '@/components/analytics/analytics-provider';
import { AppFooter } from '@/components/layout/app-footer';
import { StructuredData } from '@/components/seo/structured-data';
import { ClientLayout } from '@/components/ui/client-layout';
import { SITE_METADATA } from '@/constants/config/site-metadata';
import { fontVariables } from '@/lib/fonts';
import { shouldEnableAnalytics } from '@/lib/utils/environment';

import type { Metadata } from 'next';
import type { JSX } from 'react';
import './globals.css';

export const metadata: Metadata = SITE_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className="h-full">
      <head>
        <StructuredData pageType="website" />
        {/* Preconnect hints for analytics domains */}
        {shouldEnableAnalytics && (
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

        {/* Speculation rules for internal route prefetching */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: { href_matches: '/about' },
                  eagerness: 'moderate',
                },
                {
                  where: { href_matches: '/portfolio' },
                  eagerness: 'moderate',
                },
                {
                  where: { href_matches: '/contact' },
                  eagerness: 'conservative',
                },
              ],
              prefetch: [
                {
                  where: { href_matches: '/privacy' },
                  eagerness: 'conservative',
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${fontVariables} flex min-h-screen flex-col bg-black pt-16 text-white antialiased`}
      >
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="focus:bg-blue-accent focus:text-navy sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:px-4 focus:py-2 focus:font-semibold"
        >
          Skip to main content
        </a>
        <div className="flex flex-1 flex-col">
          <ClientLayout>{children}</ClientLayout>
          <AppFooter />
        </div>
        {/* Analytics provider - controlled by ENABLE_ANALYTICS env var */}
        {shouldEnableAnalytics && <AnalyticsProvider />}
      </body>
    </html>
  );
}
