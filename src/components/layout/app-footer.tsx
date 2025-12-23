'use client';

import { useEffect, useState, type JSX } from 'react';
import { SOCIAL_LINKS_DATA } from '../../constants/config/social-config';
import { UI_MESSAGES } from '../../constants/shared';
import { FOOTER_CONFIG } from '../../constants/ui-components';
import { getSocialIcon } from '../../utils/social-icons';

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
      className={`w-full py-16 mt-40 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Mobile Social Links */}
        <div className="mb-12 md:hidden">
          <nav
            className="flex justify-center gap-6"
            aria-label="Social media links"
          >
            {SOCIAL_LINKS_DATA.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center text-cream transition-all duration-300 hover:text-electric-cyan border border-electric-cyan/20 hover:border-electric-cyan"
                aria-label={link.name}
              >
                {getSocialIcon(link.iconName, 20)}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Content - Industrial Design */}
        <div className="border-t-4 border-safety-orange pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left - Branding */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-electric-cyan border-2 border-electric-cyan flex items-center justify-center">
                <span className="text-navy font-bold text-lg font-accent">
                  DG
                </span>
              </div>
              <div>
                <a
                  href="https://github.com/Davie3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-electric-cyan transition-colors duration-300 font-semibold block"
                >
                  David Griffin
                </a>
                <p className="text-silver text-sm">
                  System Development Engineer
                </p>
              </div>
            </div>

            {/* Right - Copyright & Links */}
            <div className="flex flex-col items-start md:items-end gap-3">
              <div className="flex items-center gap-2 text-sm text-silver">
                <span>{UI_MESSAGES.FOOTER_AI_CREDIT}</span>
                <span className="text-safety-orange">🤖</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-silver">
                <p>© {yearText} All Rights Reserved</p>
                <span className="text-electric-cyan/30">•</span>
                <a
                  href="/privacy"
                  className="text-silver hover:text-electric-cyan transition-colors duration-300 border-b border-electric-cyan/30 hover:border-electric-cyan"
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
