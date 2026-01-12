import { ProjectCardSkeleton } from '@/components/ui/loading-skeleton';

import type { JSX } from 'react';

/**
 * Loading component for the portfolio page.
 *
 * @returns The rendered loading state.
 */
export default function Loading(): JSX.Element {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16">
      {/* Hero Section Skeleton */}
      <section className="relative mb-16">
        <div className="from-blue-accent/5 via-purple-accent/5 to-cyan-accent/5 absolute inset-0 rounded-3xl bg-gradient-to-r" />
        <div className="glass relative animate-pulse rounded-3xl p-8 md:p-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="from-purple-accent/20 to-cyan-accent/20 h-12 w-12 rounded-full bg-gradient-to-r" />
            <div>
              <div className="bg-navy-accent mb-2 h-10 w-48 rounded" />
              <div className="bg-navy-accent/60 h-4 w-64 rounded" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-navy-accent/40 h-4 w-full rounded" />
            <div className="bg-navy-accent/40 h-4 w-5/6 rounded" />
            <div className="bg-navy-accent/40 h-4 w-4/6 rounded" />
          </div>
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section>
        <div className="mb-8">
          <div className="bg-navy-accent mb-2 h-8 w-48 animate-pulse rounded" />
          <div className="bg-navy-accent/60 h-4 w-64 animate-pulse rounded" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
