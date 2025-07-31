'use client';

import { AnimatePresence } from 'framer-motion';
import type { ReactNode, JSX } from 'react';

import { Header } from '@/components/header';
import { LeftSidebar } from '@/components/left-sidebar';
import { RightSidebar } from '@/components/right-sidebar';
import { PageWrapper } from '@/components/page-wrapper';
import { AnimatedBackground } from '@/components/animated-background';

type ClientLayoutProps = {
  children: ReactNode;
};

export function ClientLayout({ children }: ClientLayoutProps): JSX.Element {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <AnimatePresence mode="wait">
        <PageWrapper>{children}</PageWrapper>
      </AnimatePresence>
    </>
  );
}
