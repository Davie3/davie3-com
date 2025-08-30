'use client';

import { AnimatePresence } from 'framer-motion';
import type { ReactNode, JSX } from 'react';

import { AppHeader } from '@/components/layout/app-header';
import { LeftSidebar } from '@/components/layout/left-sidebar';
import { RightSidebar } from '@/components/layout/right-sidebar';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { AnimatedBackground } from '@/components/ui/animated-background';

type ClientLayoutProps = {
  children: ReactNode;
};

export function ClientLayout({ children }: ClientLayoutProps): JSX.Element {
  return (
    <>
      <AnimatedBackground />
      <AppHeader />
      <LeftSidebar />
      <RightSidebar />
      <AnimatePresence mode="wait">
        <PageWrapper>{children}</PageWrapper>
      </AnimatePresence>
    </>
  );
}
