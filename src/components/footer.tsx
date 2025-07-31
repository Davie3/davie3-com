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
      className={`w-full py-8 text-center text-sm text-muted-foreground transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="mb-4 md:hidden">
          <div className="flex justify-center gap-6">
            {SOCIAL_LINKS_DATA.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-transform duration-300 hover:text-primary hover:-translate-y-1"
                aria-label={link.name}
              >
                {getIcon(link.iconName)}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <a
            href="https://github.com/Davie3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            Designed & Built by David Griffin
          </a>
          <p>Created with an AI assistant 🤖</p>
          <p> {yearText} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
