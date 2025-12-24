import { GitFork, Star, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { JSX } from 'react';
import { z } from 'zod';
import { GITHUB_CONFIG } from '@/constants/config/github-config';
import { PAGE_METADATA } from '@/constants/config/site-metadata';
import { PAGE_DESCRIPTIONS, PORTFOLIO_PAGE } from '@/constants/shared';
import { GITHUB_REPO_SCHEMA } from '@/types/api-types';
import type { GitHubRepo } from '@/types/api-types';

export const metadata: Metadata = PAGE_METADATA.PORTFOLIO;

const GITHUB_API =
  'https://api.github.com/search/repositories?q=user:davie3+fork:false';

async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(GITHUB_API, {
      // Revalidate data at most once per hour
      next: {
        revalidate: GITHUB_CONFIG.revalidateInterval,
        tags: ['github-repos'],
      },
    });

    if (!response.ok) {
      // Log error only in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to fetch GitHub repos:', response.statusText);
      }
      return [];
    }

    const data: unknown = await response.json();
    const responseSchema = z.object({ items: z.unknown() });
    const parsedResponse = responseSchema.parse(data);
    const validationResult = GITHUB_REPO_SCHEMA.safeParse(parsedResponse.items);

    if (!validationResult.success) {
      // Log validation errors only in development
      if (process.env.NODE_ENV === 'development') {
        console.error('GitHub repo validation failed:', validationResult.error);
      }
      return [];
    }

    // Sort repositories by size from high to low
    return validationResult.data.sort((a, b) => b.size - a.size);
  } catch (error) {
    // Log errors only in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching GitHub repos:', error);
    }
    return [];
  }
}

/**
 * Renders the portfolio page, showcasing public software projects.
 * Design: Bento-box grid with varying card sizes
 *
 * @returns The rendered portfolio page.
 */
export default async function PortfolioPage(): Promise<JSX.Element> {
  const projects = await getGitHubRepos();

  return (
    <main className="container mx-auto max-w-7xl px-4 py-16">
      {/* Hero Section - Editorial */}
      <section className="relative mb-16">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-12 bg-safety-orange" />
              <span className="font-accent text-sm tracking-wider uppercase text-silver">
                {PORTFOLIO_PAGE.SECTION_LABEL}
              </span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-tight text-cream mb-3">
              {PORTFOLIO_PAGE.HEADING}
            </h1>
            <p className="text-xl text-electric-cyan font-semibold mb-4">
              {PAGE_DESCRIPTIONS.PORTFOLIO_HERO_SUBTITLE}
            </p>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-silver max-w-3xl">
            {PAGE_DESCRIPTIONS.PORTFOLIO_PAGE_INTRO}
          </p>
        </div>
      </section>

      {/* Projects Section - Vertical Timeline */}
      <section>
        <div className="mb-12 border-l-4 border-safety-orange pl-8">
          <span className="font-accent text-sm tracking-wider uppercase text-silver">
            {PORTFOLIO_PAGE.FEATURED_LABEL}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-cream mt-2">
            {PORTFOLIO_PAGE.FEATURED_HEADING}
          </h2>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <Link
                key={project.name}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-lg bg-navy-accent/40 border-2 border-electric-cyan/20 hover:border-electric-cyan shadow-sm hover:shadow-md transition-all duration-300 p-4"
                style={{
                  animationDelay: `${(index * 100).toString()}ms`,
                }}
              >
                {/* Project header */}
                <div className="mb-2">
                  <h3 className="text-lg md:text-xl font-display text-cream group-hover:text-electric-cyan transition-colors duration-300 leading-tight mb-2">
                    {project.name}
                  </h3>
                  <p className="text-silver leading-snug text-md">
                    {project.description ??
                      PORTFOLIO_PAGE.PROJECT_NO_DESCRIPTION}
                  </p>
                </div>

                {/* Language badge */}
                {project.language && (
                  <div className="mb-3">
                    <span className="inline-block px-2 py-0.5 bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-xs font-bold tracking-wide uppercase rounded-full">
                      {project.language}
                    </span>
                  </div>
                )}

                {/* Project footer - stats */}
                <div className="flex items-center gap-3 pt-3 border-t border-electric-cyan/10 text-xs text-silver">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-electric-cyan" />
                    <span className="font-medium">
                      {project.stargazers_count}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={14} className="text-safety-orange" />
                    <span className="font-medium">{project.forks_count}</span>
                  </div>
                </div>

                {/* Hover state border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg">
                  <div className="absolute inset-0 border-2 border-electric-cyan/50 rounded-lg" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className=" p-12 text-center border-2 border-electric-cyan/20 bg-navy-accent/20">
            <div className="w-20 h-20 bg-safety-orange/20 border-4 border-safety-orange flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔧</span>
            </div>
            <h3 className="text-2xl font-display text-cream mb-2">
              {PORTFOLIO_PAGE.EMPTY_STATE_HEADING}
            </h3>
            <p className="text-silver text-lg">
              {PORTFOLIO_PAGE.EMPTY_STATE_MESSAGE}
            </p>
          </div>
        )}

        {/* View More Link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="https://github.com/davie3"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-electric-cyan text-navy font-semibold text-lg transition-all duration-300 hover:bg-safety-orange hover:scale-105 active:scale-95"
          >
            <span>{PORTFOLIO_PAGE.VIEW_ALL_BUTTON}</span>
            <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </Link>
        </div>
      </section>
    </main>
  );
}
