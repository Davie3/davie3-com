'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { ANIMATION_DURATIONS } from '@/constants/config/animation-config';
import { SOCIAL_LINKS_DATA } from '@/constants/config/social-config';
import { getSocialIcon } from '@/utils/social-icons';

import type { JSX } from 'react';

export function LeftSidebar(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      className="fixed bottom-0 left-10 z-40 hidden w-10 flex-col items-center md:flex"
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: ANIMATION_DURATIONS.SLOW,
        delay: shouldReduceMotion ? 0 : 1.5,
      }}
      aria-label="Social media links"
    >
      <div className="flex flex-col items-center gap-6">
        {SOCIAL_LINKS_DATA.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:-translate-y-1"
            aria-label={link.name}
          >
            {getSocialIcon(link.iconName, 20)}
          </a>
        ))}
      </div>
      <div className="mt-6 h-24 w-px bg-[color:var(--color-slate-dark)]" aria-hidden="true"></div>
    </motion.aside>
  );
}
