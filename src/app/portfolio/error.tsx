'use client';

import { AlertCircle, RefreshCw } from 'lucide-react';
import type { JSX } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Error boundary component for the portfolio page.
 *
 * @param error - The error that occurred.
 * @param reset - Function to reset the error boundary.
 * @returns The rendered error state.
 */
export default function Error({ error, reset }: ErrorProps): JSX.Element {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-24">
      <section id="portfolio-error" className="text-center">
        <div className="flex justify-center mb-4">
          <AlertCircle className="h-16 w-16 text-destructive" />
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Failed to Load Portfolio
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          There was an error loading projects from GitHub. This might be due to
          rate limiting or network issues.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-muted-foreground">
              Error Details (Development)
            </summary>
            <pre className="mt-2 text-xs text-destructive bg-muted p-4 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </section>
    </main>
  );
}
