'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode, JSX } from 'react';
import { PAGE_ANIMATION } from '../../constants/config/animation-config';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps): JSX.Element {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      className="container mx-auto px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: PAGE_ANIMATION.Y_OFFSET }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -PAGE_ANIMATION.Y_OFFSET }}
      transition={{
        duration: PAGE_ANIMATION.DURATION,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.main>
  );
}
