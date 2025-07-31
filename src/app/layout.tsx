import type { Metadata } from 'next';

import { Footer } from '@/components/footer';
import { ClientLayout } from '@/components/client-layout';
import { SITE_METADATA } from '@/constants/metadata';
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
        <Footer />
      </body>
    </html>
  );
}
