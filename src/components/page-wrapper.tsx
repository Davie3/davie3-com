'use client';

import { motion } from 'framer-motion';
import type { ReactNode, JSX } from 'react';

import { ANIMATION_DURATIONS } from '@/constants/animation';

type PageWrapperProps = {
  children: ReactNode;
};

const PAGE_ANIMATION = {
  DURATION: ANIMATION_DURATIONS.SLOW,
  DELAY: 0.4,
  Y_OFFSET: 20,
} as const;

export function PageWrapper({ children }: PageWrapperProps): JSX.Element {
  return (
    <motion.main
      className="container mx-auto px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: PAGE_ANIMATION.Y_OFFSET }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: PAGE_ANIMATION.DURATION,
        delay: PAGE_ANIMATION.DELAY,
      }}
    >
      {children}
    </motion.main>
  );
}
