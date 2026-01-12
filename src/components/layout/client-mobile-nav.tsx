'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, type JSX } from 'react';
import { createPortal } from 'react-dom';

import { NAV_LINKS, type NavLink } from '@/constants/config/navigation-config';
import { useLockBody } from '@/hooks/use-lock-body';

export function ClientMobileNav(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted] = useState(true);
  const pathname = usePathname();
  useLockBody(isOpen);

  // Close menu when pathname changes - intentional pattern for navigation reset
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const mobileMenu = (
    <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
      <button
        className="mobile-menu-backdrop"
        onClick={toggleMenu}
        aria-label="Close navigation menu"
      />
      <div
        id="mobile-menu"
        className="mobile-menu-panel"
        role="navigation"
        aria-label="Mobile navigation menu"
      >
        <button
          onClick={toggleMenu}
          className="mobile-menu-close"
          aria-label="Close navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <nav className="mt-16">
          <ul className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link: NavLink, index) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.name}
                  className={`mobile-nav-item animate-delay-${(index + 1).toString()}`}
                >
                  <Link
                    href={link.href}
                    target={link.openInNewTab ? '_blank' : undefined}
                    rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                    className={`transition-colors-standard text-2xl ${
                      isActive ? 'text-blue-accent' : 'text-slate-light hover:text-blue-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="focus:ring-blue-accent relative z-50 cursor-pointer rounded-lg border-0 bg-transparent p-2 focus:ring-2 focus:outline-none"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`transition-standard block h-0.5 w-6 bg-white ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`}
          ></span>
          <span
            className={`transition-standard block h-0.5 w-6 bg-white ${isOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`transition-standard block h-0.5 w-6 bg-white ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
          ></span>
        </div>
      </button>

      {mounted &&
        typeof document !== 'undefined' &&
        isOpen &&
        createPortal(mobileMenu, document.body)}
    </div>
  );
}
