'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { PAGE_ANIMATION } from '@/constants/config/animation-config';

import type { ReactNode, JSX } from 'react';

type PageWrapperProps = {
  children: ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps): JSX.Element {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.main
      id="main-content"
      key={pathname}
      className="container mx-auto px-6 md:px-12 lg:px-24 pb-2"
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : PAGE_ANIMATION.Y_OFFSET,
      }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : -PAGE_ANIMATION.Y_OFFSET,
      }}
      transition={{
        duration: PAGE_ANIMATION.DURATION,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.main>
  );
}
