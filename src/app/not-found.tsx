'use client';

import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { NOT_FOUND_PAGE } from '@/constants/config/error-pages-config';

import type { JSX } from 'react';

/**
 * Custom 404 error page component.
 *
 * @returns The rendered 404 page.
 */
export default function NotFound(): JSX.Element {
  return (
    <main id="main-content" className="flex flex-1 items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div
            style={{ fontSize: NOT_FOUND_PAGE.HEADING_SIZE.MOBILE }}
            className="from-electric-cyan to-safety-orange animate-pulse bg-gradient-to-r bg-clip-text font-bold text-transparent md:hidden"
          >
            {NOT_FOUND_PAGE.HEADING_404}
          </div>
          <div
            style={{ fontSize: NOT_FOUND_PAGE.HEADING_SIZE.DESKTOP }}
            className="from-electric-cyan to-safety-orange hidden animate-pulse bg-gradient-to-r bg-clip-text font-bold text-transparent md:block"
          >
            {NOT_FOUND_PAGE.HEADING_404}
          </div>
          <div className="from-electric-cyan/20 to-safety-orange/20 absolute inset-0 bg-gradient-to-r blur-3xl" />
        </div>

        {/* Error Message */}
        <h1 className="text-slate-light mb-4 text-3xl font-bold md:text-4xl">
          {NOT_FOUND_PAGE.TITLE}
        </h1>
        <p className="text-slate-dark mx-auto mb-8 max-w-md text-lg">
          {NOT_FOUND_PAGE.DESCRIPTION}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group bg-electric-cyan text-navy hover:bg-safety-orange hover:shadow-electric-cyan/25 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Home className="h-5 w-5" />
            <span>{NOT_FOUND_PAGE.BUTTONS.HOME}</span>
          </Link>
          <button
            onClick={() => {
              window.history.back();
            }}
            className="group glass text-slate-light inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>{NOT_FOUND_PAGE.BUTTONS.BACK}</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="border-navy-accent/30 mt-12 border-t pt-8">
          <p className="text-slate-dark mb-4 text-sm">{NOT_FOUND_PAGE.HELPFUL_LINKS_LABEL}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {NOT_FOUND_PAGE.NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-electric-cyan hover:text-safety-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
