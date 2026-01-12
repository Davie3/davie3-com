'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { JSX } from 'react';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
};

export function NavLink({ href, children, target, rel, className }: NavLinkProps): JSX.Element {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${className ?? ''} ${
        isActive
          ? 'text-blue-accent bg-navy-accent/50'
          : 'text-slate-light hover:text-blue-accent hover:bg-navy-accent/30'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
      {isActive && (
        <div className="bg-blue-accent absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 transform rounded-full" />
      )}
    </Link>
  );
}
