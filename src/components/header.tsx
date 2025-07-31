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
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: NAV_ANIMATION.HEADER_DURATION }}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          DG
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
                    className={`transition-colors duration-300 ${
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {link.name}
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
