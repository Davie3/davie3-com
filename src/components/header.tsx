'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'GitHub', href: 'https://github.com/Davie3', isExternal: true },
];

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--color-navy-light)]/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link
          href="/"
          className="text-2xl font-bold text-[color:var(--color-accent)]"
        >
          Davie3
        </Link>
        <motion.ul
          className="flex items-center gap-6"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.li key={link.name} variants={navItemVariants}>
              <Link
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="text-[color:var(--color-slate-light)] hover:text-[color:var(--color-accent)] transition-colors duration-300"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
}
