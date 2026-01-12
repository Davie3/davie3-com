'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { ANIMATION_DURATIONS } from '@/constants/config/animation-config';

import type { JSX } from 'react';

export function RightSidebar(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      className="fixed right-10 bottom-0 z-40 hidden w-10 flex-col items-center md:flex"
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: ANIMATION_DURATIONS.SLOW,
        delay: shouldReduceMotion ? 0 : 1.5,
      }}
      aria-label="Developer signature"
    >
      <div
        className="writing-mode-vertical p-2 text-sm text-[color:var(--color-accent)] transition-all duration-300 hover:-translate-y-1 hover:text-[color:var(--color-purple-accent)]"
        aria-hidden="true"
      >
        Davie3 / David Griffin
      </div>
      <div className="mt-6 h-24 w-px bg-[color:var(--color-slate-dark)]" aria-hidden="true"></div>
    </motion.aside>
  );
}
