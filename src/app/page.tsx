import type { JSX } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import {
  PERSONAL_INFO,
  PROFESSIONAL_TITLES,
  PAGE_DESCRIPTIONS,
} from '@/constants/shared';
import { EXTERNAL_URLS, INTERNAL_ROUTES } from '../constants/urls';

/**
 * Renders the home page of the personal website.
 *
 * @returns The rendered home page.
 */
export default function Home(): JSX.Element {
  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center p-4 text-center md:p-8 relative overflow-hidden"
      style={{ minHeight: 'calc(100vh - 4rem)' }}
    >
      {/* Hero background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/10 via-transparent to-purple-accent/10 pointer-events-none" />

      <div className="max-w-4xl relative z-10">
        <div className="mb-8">
          <Image
            src="/images/profile_square.png"
            alt="David Griffin"
            width={200}
            height={200}
            className="rounded-2xl mx-auto shadow-2xl ring-4 ring-blue-accent/20"
            priority
          />
        </div>
        <h1 className="text-6xl font-bold tracking-tight gradient-text sm:text-7xl md:text-8xl lg:text-9xl mb-6">
          {PERSONAL_INFO.FULL_NAME}
        </h1>

        <h2 className="mt-4 text-2xl font-medium tracking-tight text-slate-light sm:text-3xl md:text-4xl lg:text-5xl">
          {PROFESSIONAL_TITLES.CURRENT}
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-slate-dark md:text-xl lg:text-2xl max-w-3xl mx-auto">
          {PAGE_DESCRIPTIONS.PRIMARY_DESCRIPTION}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href={INTERNAL_ROUTES.ABOUT}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-accent to-blue-accent rounded-xl font-semibold text-navy transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-accent/40 glow-on-hover cursor-pointer transform hover:-translate-y-1 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              About Me
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href={INTERNAL_ROUTES.PORTFOLIO}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-accent to-purple-accent rounded-xl font-semibold text-navy transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-accent/40 glow-on-hover cursor-pointer transform hover:-translate-y-1 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          <a
            href={EXTERNAL_URLS.GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 glass rounded-xl font-semibold text-slate-light transition-all duration-300 hover:scale-105 hover:bg-navy-accent/50"
          >
            <span>GitHub</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </main>
  );
}
