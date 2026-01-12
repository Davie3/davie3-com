'use client';

import { AlertCircle, RefreshCw } from 'lucide-react';

import type { JSX } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Error boundary component for the portfolio page.
 *
 * @param error - The error that occurred.
 * @param reset - Function to reset the error boundary.
 * @returns The rendered error state.
 */
export default function Error({ error, reset }: ErrorProps): JSX.Element {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      <section id="portfolio-error" className="text-center">
        <div className="mb-4 flex justify-center">
          <AlertCircle className="text-destructive h-16 w-16" />
        </div>
        <h1 className="text-primary mb-4 text-4xl font-bold">Failed to Load Portfolio</h1>
        <p className="text-muted-foreground mb-6 text-lg">
          There was an error loading projects from GitHub. This might be due to rate limiting or
          network issues.
        </p>
        <button
          onClick={reset}
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-muted-foreground cursor-pointer text-sm">
              Error Details (Development)
            </summary>
            <pre className="text-destructive bg-muted mt-2 overflow-auto rounded p-4 text-xs">
              {error.message}
            </pre>
          </details>
        )}
      </section>
    </main>
  );
}
