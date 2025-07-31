'use client';

import { useEffect, useState, JSX } from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitch } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';

type SocialLink = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/davie3',
    icon: <FiGithub size={24} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/davie3',
    icon: <FiLinkedin size={24} />,
  },
  {
    name: 'Twitch',
    href: 'https://www.twitch.tv/davie3',
    icon: <FiTwitch size={24} />,
  },
  {
    name: 'X',
    href: 'https://x.com/itsdavie3/',
    icon: <FaXTwitter size={24} />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/itsdavie3/',
    icon: <FiInstagram size={24} />,
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/itsdavie3.bsky.social',
    icon: <SiBluesky size={24} />,
  },
];

export function Footer() {
  const STARTING_YEAR = 2025;
  const currentYear = new Date().getFullYear();
  const yearText =
    currentYear !== STARTING_YEAR
      ? `${STARTING_YEAR} - ${currentYear}`
      : currentYear;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Delay to allow other elements to render first

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
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-transform duration-300 hover:text-primary hover:-translate-y-1"
                aria-label={link.name}
              >
                {link.icon}
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
