'use client';

import { useEffect, useState, type JSX } from 'react';

import { SOCIAL_LINKS_DATA } from '@/constants/config/social-config';
import { UI_MESSAGES } from '@/constants/shared';
import { FOOTER_CONFIG } from '@/constants/ui-components';
import { getSocialIcon } from '@/utils/social-icons';

export function AppFooter(): JSX.Element {
  const currentYear = new Date().getFullYear();
  const yearText =
    currentYear !== FOOTER_CONFIG.STARTING_YEAR
      ? `${FOOTER_CONFIG.STARTING_YEAR.toString()}-${currentYear.toString()}`
      : currentYear.toString();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, FOOTER_CONFIG.ANIMATION_DELAY);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <footer
      className={`mt-auto w-full py-16 pb-8 transition-all duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Mobile Social Links */}
        <div className="mb-12 md:hidden">
          <nav className="flex justify-center gap-6" aria-label="Social media links">
            {SOCIAL_LINKS_DATA.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-electric-cyan border-electric-cyan/20 hover:border-electric-cyan flex h-12 w-12 items-center justify-center border transition-all duration-300"
                aria-label={link.name}
              >
                {getSocialIcon(link.iconName, 20)}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Content - Industrial Design */}
        <div className="border-safety-orange border-t-0 pt-10 lg:border-t-4 lg:pt-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Left - Branding */}
            <div className="flex items-center gap-4">
              <div className="bg-electric-cyan border-electric-cyan flex h-12 w-12 items-center justify-center border-2">
                <span className="text-navy font-accent text-lg font-bold">DG</span>
              </div>
              <div>
                <a
                  href="https://github.com/Davie3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-electric-cyan block font-semibold transition-colors duration-300"
                >
                  David Griffin
                </a>
                <p className="text-silver text-sm">System Development Engineer</p>
              </div>
            </div>

            {/* Right - Copyright & Links */}
            <div className="flex flex-col items-start gap-3 md:items-end">
              <div className="text-silver flex items-center gap-2 text-sm">
                <span>{UI_MESSAGES.FOOTER_AI_CREDIT}</span>
                <span className="text-safety-orange">🤖</span>
              </div>
              <div className="text-silver flex items-center gap-4 text-sm">
                <p>© {yearText} All Rights Reserved</p>
                <span className="text-electric-cyan/30">•</span>
                <a
                  href="/privacy"
                  className="text-silver hover:text-electric-cyan border-electric-cyan/30 hover:border-electric-cyan border-b transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
