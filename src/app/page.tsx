import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';
import {
  PERSONAL_INFO,
  PROFESSIONAL_TITLES,
  PAGE_DESCRIPTIONS,
} from '@/constants/shared';
import { EXTERNAL_URLS, INTERNAL_ROUTES } from '../constants/urls';

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
      <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 via-transparent to-navy-accent pointer-events-none" />

      {/* Asymmetric grid layout */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center">
          {/* Left column - Typography dominance */}
          <div className="lg:col-span-7 space-y-6">
            {/* Name - Huge serif display */}
            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.9] tracking-tight text-cream">
              David
              <br />
              <span className="text-electric-cyan">Griffin</span>
            </h1>

            {/* Role with accent font */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-safety-orange" />
              <h2 className="font-accent text-2xl md:text-3xl lg:text-4xl tracking-wider uppercase text-silver">
                {PROFESSIONAL_TITLES.CURRENT}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl leading-relaxed text-silver max-w-2xl">
              {PAGE_DESCRIPTIONS.HOME_DESCRIPTION}
            </p>

            {/* CTA Buttons - Industrial style */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-4">
              <Link
                href={INTERNAL_ROUTES.ABOUT}
                className="group relative px-8 py-4 bg-electric-cyan text-navy font-semibold text-lg transition-all duration-300 hover:bg-safety-orange hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  About Me
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href={INTERNAL_ROUTES.PORTFOLIO}
                className="group relative px-8 py-4 bg-electric-cyan text-navy font-semibold text-lg transition-all duration-300 hover:bg-safety-orange hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  View Work
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <a
                href={EXTERNAL_URLS.GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 text-silver font-semibold text-lg transition-all duration-300 hover:text-electric-cyan"
              >
                <span>GitHub</span>
                <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Right column - Image with overlap effect */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative geometric shape behind */}
              <div className="absolute -inset-4 bg-safety-orange/10 transform rotate-3" />
              <div className="absolute -inset-4 bg-electric-cyan/10 transform -rotate-2" />

              {/* Profile image */}
              <div className="relative z-10">
                <Image
                  src="/images/profile_square.webp"
                  alt="David Griffin"
                  width={500}
                  height={500}
                  className="w-full max-w-md mx-auto shadow-2xl border-4 border-electric-cyan/30"
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
