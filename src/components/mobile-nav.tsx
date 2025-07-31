'use client';

import { useState, useEffect, type JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

import { useLockBody } from '@/hooks/use-lock-body';
import { NAV_LINKS, NAV_ANIMATION } from '@/constants/navigation';

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

export function MobileNav(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  useLockBody(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="z-50 relative p-2 focus:outline-none"
        aria-label="Toggle menu"
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-[color:var(--color-navy)] p-10 z-50"
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="mt-16">
                <ul className="flex flex-col items-center gap-8">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.li key={link.name} variants={navItemVariants}>
                        <Link
                          href={link.href}
                          target={link.openInNewTab ? '_blank' : undefined}
                          rel={
                            link.openInNewTab
                              ? 'noopener noreferrer'
                              : undefined
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
    </div>
  );
}
