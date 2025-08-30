'use client';

import { useEffect, useState, type JSX } from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitch } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';

import { SOCIAL_LINKS_DATA, FOOTER_CONFIG } from '@/constants/social';
import type { SocialLinkData } from '@/types/social';

const getIcon = (iconName: SocialLinkData['iconName']): JSX.Element => {
  const iconProps = { size: 24 };
  switch (iconName) {
    case 'github':
      return <FiGithub {...iconProps} />;
    case 'linkedin':
      return <FiLinkedin {...iconProps} />;
    case 'twitch':
      return <FiTwitch {...iconProps} />;
    case 'x':
      return <FaXTwitter {...iconProps} />;
    case 'instagram':
      return <FiInstagram {...iconProps} />;
    case 'bluesky':
      return <SiBluesky {...iconProps} />;
    default:
      return <FiGithub {...iconProps} />;
  }
};

export function Footer(): JSX.Element {
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
          <div className="flex justify-center gap-6">
            {SOCIAL_LINKS_DATA.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-light transition-all duration-300 hover:text-blue-accent hover:scale-110 hover:bg-navy-accent/50"
                aria-label={link.name}
              >
                {getIcon(link.iconName)}
              </a>
            ))}
          </div>
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
              <p className="text-xs">© {yearText} All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
