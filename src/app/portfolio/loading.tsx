import type { JSX } from 'react';
import { ProjectCardSkeleton } from '@/components/ui/loading-skeleton';

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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-accent/5 via-purple-accent/5 to-cyan-accent/5 rounded-3xl" />
        <div className="relative glass rounded-3xl p-8 md:p-12 animate-pulse">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-accent/20 to-cyan-accent/20 rounded-full" />
            <div>
              <div className="h-10 bg-navy-accent rounded w-48 mb-2" />
              <div className="h-4 bg-navy-accent/60 rounded w-64" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-navy-accent/40 rounded w-full" />
            <div className="h-4 bg-navy-accent/40 rounded w-5/6" />
            <div className="h-4 bg-navy-accent/40 rounded w-4/6" />
          </div>
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section>
        <div className="mb-8">
          <div className="h-8 bg-navy-accent rounded w-48 mb-2 animate-pulse" />
          <div className="h-4 bg-navy-accent/60 rounded w-64 animate-pulse" />
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
