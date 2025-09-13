'use client';

import { useEffect, useState, type JSX } from 'react';

import { SOCIAL_LINKS_DATA } from '../../lib/config/social-config';
import { FOOTER_CONFIG } from '../../constants/ui-components';
import { getSocialIcon } from '../../utils/social-icons';

export function AppFooter(): JSX.Element {
  const currentYear = new Date().getFullYear();
  const yearText =
    currentYear !== FOOTER_CONFIG.STARTING_YEAR
      ? `${FOOTER_CONFIG.STARTING_YEAR} - ${currentYear}`
      : currentYear;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, FOOTER_CONFIG.ANIMATION_DELAY);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      className={`w-full py-12 text-center transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Social Links */}
        <div className="mb-8 md:hidden">
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
                className="w-12 h-12 flex items-center justify-center text-slate-light transition-all duration-300 hover:text-blue-accent hover:scale-110"
                aria-label={link.name}
              >
                {getSocialIcon(link.iconName, 24)}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Content */}
        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-accent to-purple-accent rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-sm">DG</span>
              </div>
              <a
                href="https://github.com/Davie3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-light hover:text-blue-accent transition-colors duration-300 font-medium"
              >
                Designed & Built by David Griffin
              </a>
            </div>

            <div className="flex flex-col items-center gap-2 text-sm text-slate-dark">
              <p className="flex items-center gap-2">
                Created with an AI assistant
                <span className="text-base">🤖</span>
              </p>
              <div className="flex items-center gap-4 text-xs">
                <p>© {yearText} All Rights Reserved.</p>
                <span className="text-slate-dark/50">•</span>
                <a
                  href="/privacy"
                  className="text-slate-dark hover:text-blue-accent transition-colors duration-300 underline"
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
