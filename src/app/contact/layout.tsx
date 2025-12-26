import type { Metadata } from 'next';
import type { JSX } from 'react';
import { PAGE_METADATA } from '@/constants/config/site-metadata';

export const metadata: Metadata = PAGE_METADATA.CONTACT;

/**
 * Contact page layout with Turnstile-specific resource hints.
 * Preconnect and dns-prefetch optimize Cloudflare Turnstile loading.
 */
export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      {/* Turnstile-specific resource hints */}
      <link
        rel="preconnect"
        href="https://challenges.cloudflare.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://challenges.cloudflare.com" />
      {children}
    </>
  );
}
