'use client';

import { motion } from 'framer-motion';

export function RightSidebar() {
  return (
    <motion.div
      className="hidden md:flex flex-col items-center fixed bottom-0 right-10 w-10"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <a
        href="mailto:your-email@example.com"
        className="p-2 text-[color:var(--color-slate-dark)] hover:text-[color:var(--color-accent)] transition-transform duration-300 hover:-translate-y-1 text-sm"
        style={{ writingMode: 'vertical-rl' }}
      >
        your-email@example.com
      </a>
      <div className="mt-6 w-px h-24 bg-[color:var(--color-slate-dark)]"></div>
    </motion.div>
  );
}
