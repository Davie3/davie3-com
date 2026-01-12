import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Suspense } from 'react';

import { NAV_LINKS, type NavLink } from '@/constants/config/navigation-config';

import { NavLink as ClientNavLink } from './nav-link';

import type { JSX } from 'react';

const ClientMobileNav = dynamic(
  () =>
    import('./client-mobile-nav').then((mod) => ({
      default: mod.ClientMobileNav,
    })),
  { ssr: false },
);

/**
 * Server-side header component with CSS-only animations.
 * Mobile navigation is dynamically imported as a client component.
 */
export function AppHeader(): JSX.Element {
  return (
    <header className="glass app-header-animation border-electric-cyan/10 fixed top-0 right-0 left-0 z-50 border-b">
      <nav
        className="container mx-auto flex items-center justify-between p-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="group flex items-center gap-2" aria-label="DG - Go to homepage">
          <div className="flex h-10 w-10 items-center justify-center transition-all duration-300">
            <span className="text-electric-cyan font-accent group-hover:text-safety-orange text-lg font-bold">
              DG
            </span>
          </div>
        </Link>

        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((link: NavLink, index) => (
              <li key={link.name} className={`nav-item animate-delay-${(index + 1).toString()}`}>
                <ClientNavLink
                  href={link.href}
                  target={link.openInNewTab ? '_blank' : undefined}
                  rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                  className="text-cream hover:text-electric-cyan relative px-4 py-2 font-medium transition-all duration-300"
                >
                  {link.name}
                </ClientNavLink>
              </li>
            ))}
          </ul>
        </div>

        <Suspense fallback={<div className="h-10 w-10 md:hidden" />}>
          <ClientMobileNav />
        </Suspense>
      </nav>
    </header>
  );
}
