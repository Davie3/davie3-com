'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { JSX } from 'react';

import { MobileNav } from '@/components/mobile-nav';
import { NAV_LINKS, NAV_ANIMATION } from '@/constants/navigation';

const navContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: NAV_ANIMATION.STAGGER_DELAY,
      delayChildren: NAV_ANIMATION.CHILDREN_DELAY,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: NAV_ANIMATION.ITEM_DURATION,
    },
  },
};

export function Header(): JSX.Element {
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: NAV_ANIMATION.HEADER_DURATION }}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-accent to-purple-accent rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-navy font-bold text-lg">DG</span>
          </div>
        </Link>

        <div className="hidden md:block">
          <motion.ul
            className="flex items-center gap-6"
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.li key={link.name} variants={navItemVariants}>
                  <Link
                    href={link.href}
                    target={link.openInNewTab ? '_blank' : undefined}
                    rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-blue-accent bg-navy-accent/50'
                        : 'text-slate-light hover:text-blue-accent hover:bg-navy-accent/30'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-accent rounded-full" />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        <MobileNav />
      </nav>
    </motion.header>
  );
}
