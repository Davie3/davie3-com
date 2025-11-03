import type { JSX } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function ProjectCardSkeleton() {
  return (
    <div className="glass rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-3/5" />
        <Skeleton className="h-3 w-3 rounded-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="flex items-center gap-4 pt-2">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-10" />
      </div>
    </div>
  );
}

/**
 * Loading component for the portfolio page.
 *
 * @returns The rendered loading state.
 */
export default function Loading(): JSX.Element {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      {/* Hero Section Skeleton */}
      <section className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-accent/5 via-purple-accent/5 to-cyan-accent/5 rounded-3xl" />
        <div className="relative glass rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-10 w-48" />
              <Skeleton className="h-4 w-64" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section>
        <div className="mb-8 space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
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
