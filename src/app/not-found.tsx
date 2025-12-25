'use client';

import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { JSX } from 'react';
import { NOT_FOUND_PAGE } from '@/constants/config/error-pages-config';

/**
 * Custom 404 error page component.
 *
 * @returns The rendered 404 page.
 */
export default function NotFound(): JSX.Element {
  return (
    <main
      id="main-content"
      className="flex-1 flex items-center justify-center p-4"
    >
      <div className="text-center max-w-2xl">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div
            style={{ fontSize: NOT_FOUND_PAGE.HEADING_SIZE.MOBILE }}
            className="md:hidden font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-safety-orange animate-pulse"
          >
            {NOT_FOUND_PAGE.HEADING_404}
          </div>
          <div
            style={{ fontSize: NOT_FOUND_PAGE.HEADING_SIZE.DESKTOP }}
            className="hidden md:block font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-safety-orange animate-pulse"
          >
            {NOT_FOUND_PAGE.HEADING_404}
          </div>
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-electric-cyan/20 to-safety-orange/20" />
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-light mb-4">
          {NOT_FOUND_PAGE.TITLE}
        </h1>
        <p className="text-lg text-slate-dark mb-8 max-w-md mx-auto">
          {NOT_FOUND_PAGE.DESCRIPTION}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-electric-cyan rounded-xl font-semibold text-navy transition-all duration-300 hover:bg-safety-orange hover:scale-105 hover:shadow-lg hover:shadow-electric-cyan/25"
          >
            <Home className="w-5 h-5" />
            <span>{NOT_FOUND_PAGE.BUTTONS.HOME}</span>
          </Link>
          <button
            onClick={() => {
              window.history.back();
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-semibold text-slate-light transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>{NOT_FOUND_PAGE.BUTTONS.BACK}</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-navy-accent/30">
          <p className="text-sm text-slate-dark mb-4">
            {NOT_FOUND_PAGE.HELPFUL_LINKS_LABEL}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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
