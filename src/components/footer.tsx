'use client';

import { useEffect, useState } from 'react';

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
