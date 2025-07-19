'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileNav } from '@/components/mobile-nav';

type NavLink = {
  name: string;
  href: string;
  openInNewTab?: boolean;
};

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: 'https://blog.davie3.com', openInNewTab: true },
  { name: 'Tech Blog', href: 'https://tech.davie3.com', openInNewTab: true },
  { name: 'Contact', href: '/contact' },
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
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
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
            {navLinks.map((link) => {
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
