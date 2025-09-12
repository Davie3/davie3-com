import type { JSX } from 'react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { NAV_LINKS, type NavLink } from '../../lib/config/navigation-config';
import { NavLink as ClientNavLink } from './nav-link';

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
    <header className="fixed top-0 left-0 right-0 z-50 glass app-header-animation">
      <nav
        className="container mx-auto flex items-center justify-between p-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="DG - Go to homepage"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-accent to-purple-accent rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-navy font-bold text-lg">DG</span>
          </div>
        </Link>

        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((link: NavLink, index) => (
              <li
                key={link.name}
                className={`nav-item animate-delay-${index + 1}`}
              >
                <ClientNavLink
                  href={link.href}
                  target={link.openInNewTab ? '_blank' : undefined}
                  rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                  className="relative px-4 py-2 rounded-lg font-medium transition-all duration-300 text-slate-light hover:text-blue-accent hover:bg-navy-accent/30"
                >
                  {link.name}
                </ClientNavLink>
              </li>
            ))}
          </ul>
        </div>

        <Suspense fallback={<div className="md:hidden w-10 h-10" />}>
          <ClientMobileNav />
        </Suspense>
      </nav>
    </header>
  );
}
