'use client';

import { useState, useEffect, type JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { createPortal } from 'react-dom';

import { useLockBody } from '@/hooks/use-lock-body';
import {
  NAV_LINKS,
  NAV_ANIMATION,
  type NavLink,
} from '../../lib/config/navigation-config';

const menuVariants: Variants = {
  initial: {
    opacity: 0,
    x: '100%',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: NAV_ANIMATION.ITEM_DURATION,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: NAV_ANIMATION.ITEM_DURATION,
      ease: 'easeInOut',
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

export function MobileNavigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  useLockBody(isOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent hydration mismatch by ensuring client-side rendering
  if (!mounted) {
    return (
      <div className="md:hidden">
        <button
          className="z-50 relative p-2 focus:outline-none focus:ring-2 focus:ring-blue-accent focus:ring-offset-2 focus:ring-offset-navy rounded-lg"
          aria-label="Open navigation menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>
    );
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const mobileMenu = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMenu}
        >
          <motion.div
            id="mobile-menu"
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-[color:var(--color-navy)] p-10 z-[10000]"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 text-white hover:text-[color:var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-accent rounded-lg"
              aria-label="Close navigation menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <nav className="mt-16">
              <ul className="flex flex-col items-center gap-6">
                {NAV_LINKS.map((link: NavLink) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li key={link.name} variants={navItemVariants}>
                      <Link
                        href={link.href}
                        target={link.openInNewTab ? '_blank' : undefined}
                        rel={
                          link.openInNewTab ? 'noopener noreferrer' : undefined
                        }
                        className={`text-2xl transition-colors duration-300 ${
                          isActive
                            ? 'text-[color:var(--color-accent)]'
                            : 'text-[color:var(--color-slate-light)] hover:text-[color:var(--color-accent)]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="z-50 relative p-2 focus:outline-none focus:ring-2 focus:ring-blue-accent focus:ring-offset-2 focus:ring-offset-navy rounded-lg"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <div className="space-y-1.5">
          <motion.span
            className="block w-6 h-0.5 bg-white"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          ></motion.span>
          <motion.span
            className="block w-6 h-0.5 bg-white"
            animate={{ opacity: isOpen ? 0 : 1 }}
          ></motion.span>
          <motion.span
            className="block w-6 h-0.5 bg-white"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          ></motion.span>
        </div>
      </button>

      {mounted &&
        typeof document !== 'undefined' &&
        createPortal(mobileMenu, document.body)}
    </div>
  );
}
