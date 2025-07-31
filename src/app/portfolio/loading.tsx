import type { JSX } from 'react';

/**
 * Loading component for the portfolio page.
 *
 * @returns The rendered loading state.
 */
export default function Loading(): JSX.Element {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-24">
      <section id="portfolio">
        <h1 className="text-4xl font-bold text-primary">My Public Portfolio</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Loading projects from GitHub...
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-lg border border-border bg-card p-6"
            >
              <div className="h-6 bg-muted rounded mb-2"></div>
              <div className="h-4 bg-muted rounded mb-4 w-3/4"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-4 bg-muted rounded w-16"></div>
                  <div className="h-4 bg-muted rounded w-16"></div>
                </div>
                <div className="h-4 bg-muted rounded w-20"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
