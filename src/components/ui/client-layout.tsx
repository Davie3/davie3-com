'use client';

import { AnimatePresence } from 'framer-motion';
import type { ReactNode, JSX } from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { LeftSidebar } from '@/components/layout/left-sidebar';
import { RightSidebar } from '@/components/layout/right-sidebar';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { PageWrapper } from '@/components/ui/page-wrapper';

type ClientLayoutProps = {
  children: ReactNode;
};

export function ClientLayout({ children }: ClientLayoutProps): JSX.Element {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-electric-cyan focus:text-navy focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>
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
