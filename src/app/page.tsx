import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { PROFESSIONAL_TITLES, PAGE_DESCRIPTIONS } from '@/constants/shared';
import { EXTERNAL_URLS, INTERNAL_ROUTES } from '@/constants/urls';

import type { JSX } from 'react';

/**
 * Renders the home page of the personal website.
 * Design: Midnight Industrial - Bold asymmetric layout with editorial typography
 *
 * @returns The rendered home page.
 */
export default function Home(): JSX.Element {
  return (
    <main id="main-content" className="relative overflow-hidden p-4 md:p-8">
      {/* Subtle background gradient */}
      <div className="from-electric-cyan/5 to-navy-accent pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />

      {/* Asymmetric grid layout */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left column - Typography dominance */}
          <div className="space-y-6 lg:col-span-7">
            {/* Name - Huge serif display */}
            <h1 className="font-display text-cream text-7xl leading-[0.9] tracking-tight sm:text-8xl md:text-9xl lg:text-[10rem]">
              David
              <br />
              <span className="text-electric-cyan">Griffin</span>
            </h1>

            {/* Role with accent font */}
            <div className="flex items-center gap-4">
              <div className="bg-safety-orange h-px w-12" />
              <h2 className="font-accent text-silver text-3xl tracking-wider uppercase md:text-4xl lg:text-5xl">
                {PROFESSIONAL_TITLES.CURRENT}
              </h2>
            </div>

            {/* Description */}
            <p className="text-silver max-w-2xl text-lg leading-relaxed md:text-xl">
              {PAGE_DESCRIPTIONS.HOME_DESCRIPTION}
            </p>

            {/* CTA Buttons - Industrial style */}
            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:items-start">
              <Link
                href={INTERNAL_ROUTES.ABOUT}
                className="group bg-electric-cyan text-navy hover:bg-safety-orange relative px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  About Me
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href={INTERNAL_ROUTES.PORTFOLIO}
                className="group bg-electric-cyan text-navy hover:bg-safety-orange relative px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  View Work
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <a
                href={EXTERNAL_URLS.GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-silver hover:text-electric-cyan flex items-center gap-3 px-6 py-4 text-lg font-semibold transition-all duration-300"
              >
                <span>GitHub</span>
                <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Right column - Image with overlap effect */}
          <div className="relative lg:col-span-5">
            <div className="relative">
              {/* Decorative geometric shape behind */}
              <div className="bg-safety-orange/10 absolute -inset-4 rotate-3 transform" />
              <div className="bg-electric-cyan/10 absolute -inset-4 -rotate-2 transform" />

              {/* Profile image */}
              <div className="relative z-10">
                <Image
                  src="/images/profile_square.webp"
                  alt="David Griffin"
                  width={500}
                  height={500}
                  className="border-electric-cyan/30 mx-auto w-full max-w-md border-4 shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
