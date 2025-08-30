import type { Metadata } from 'next';

import { AppFooter } from '@/components/layout/app-footer';
import { ClientLayout } from '@/components/ui/client-layout';
import { SITE_METADATA } from '@/lib/config/site-metadata';
import { fontVariables } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = SITE_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontVariables} antialiased pt-16 bg-black text-white`}
      >
        <ClientLayout>{children}</ClientLayout>
        <AppFooter />
      </body>
    </html>
  );
}
