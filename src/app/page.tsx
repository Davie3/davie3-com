import type { JSX } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const GITHUB_URL = 'https://github.com/davie3';

/**
 * Renders the home page of the personal website.
 *
 * @returns The rendered home page.
 */
export default function Home(): JSX.Element {
  return (
    <main
      className="flex flex-col items-center justify-center p-4 text-center md:p-8"
      style={{ minHeight: 'calc(100vh - 4rem)' }}
    >
      <div className="max-w-3xl">
        <h1 className="text-6xl font-bold tracking-tight text-primary sm:text-7xl md:text-8xl">
          David Griffin
        </h1>
        <h2 className="mt-4 text-2xl font-medium tracking-tight text-secondary sm:text-3xl md:text-4xl">
          Software Engineer
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
          I build and scale resilient, high-performance software systems. With a
          passion for elegant code and innovative solutions, I transform complex
          challenges into seamless user experiences.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/portfolio"
            className="rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View My Work
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold leading-6 text-foreground hover:text-muted-foreground"
          >
            GitHub <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
