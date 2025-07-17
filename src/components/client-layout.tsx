'use client';

import { Header } from '@/components/header';
import { LeftSidebar } from '@/components/left-sidebar';
import { RightSidebar } from '@/components/right-sidebar';
import { PageWrapper } from '@/components/page-wrapper';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}
