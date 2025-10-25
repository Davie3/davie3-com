import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/config/site-metadata';

export const metadata: Metadata = PAGE_METADATA.CONTACT;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
