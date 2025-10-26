'use client';

import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { JSX } from 'react';

/**
 * Custom 404 error page component.
 *
 * @returns The rendered 404 page.
 */
export default function NotFound(): JSX.Element {
  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="text-center max-w-2xl">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-accent via-purple-accent to-cyan-accent animate-pulse">
            404
          </div>
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-accent/20 via-purple-accent/20 to-cyan-accent/20" />
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-light mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-dark mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-accent to-purple-accent rounded-xl font-semibold text-navy transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-accent/25"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => {
              window.history.back();
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-semibold text-slate-light transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-navy-accent/30">
          <p className="text-sm text-slate-dark mb-4">
            Here are some helpful links:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/about"
              className="text-blue-accent hover:text-cyan-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-blue-accent hover:text-cyan-accent transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-blue-accent hover:text-cyan-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
