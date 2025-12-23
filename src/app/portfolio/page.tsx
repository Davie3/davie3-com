import { GitFork, Star, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { JSX } from 'react';
import { z } from 'zod';
import { GITHUB_CONFIG } from '@/constants/config/github-config';
import { PAGE_METADATA } from '@/constants/config/site-metadata';
import { PAGE_DESCRIPTIONS } from '@/constants/shared';
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
    <main className="container mx-auto max-w-7xl px-4 py-24">
      {/* Hero Section - Editorial */}
      <section className="relative mb-16">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-12 bg-safety-orange" />
              <span className="font-accent text-sm tracking-wider uppercase text-silver">
                Portfolio
              </span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-tight text-cream mb-3">
              My Work
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

      {/* Projects Section - Bento Grid */}
      <section>
        <div className="mb-8 border-l-4 border-safety-orange pl-8">
          <span className="font-accent text-sm tracking-wider uppercase text-silver">
            Featured
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-cream mt-2">
            Open Source Projects
          </h2>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
            {projects.map((project, index) => {
              // Create varying card sizes for bento-box effect
              const isLarge = index % 7 === 0 || index % 7 === 3;
              const colSpan = isLarge ? 'md:col-span-2' : 'md:col-span-1';

              return (
                <Link
                  key={project.name}
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 md:p-8 bg-navy-accent/40 border border-electric-cyan/20 hover:border-electric-cyan transition-all duration-300 ${colSpan}`}
                  style={{ animationDelay: `${(index * 100).toString()}ms` }}
                >
                  {/* Accent corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-safety-orange/10 transform translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />

                  <div className="relative space-y-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display text-cream group-hover:text-electric-cyan transition-colors duration-300 leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-silver leading-relaxed mt-3">
                        {project.description ?? 'No description available'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-electric-cyan/10">
                      <div className="flex items-center gap-3">
                        {project.language && (
                          <span className="px-3 py-1 bg-navy-accent/50 border border-electric-cyan/20 text-cream text-xs font-medium">
                            {project.language}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-silver">
                        <div className="flex items-center gap-1">
                          <Star size={14} />
                          <span>{project.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={14} />
                          <span>{project.forks_count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center border border-electric-cyan/20 bg-navy-accent/20">
            <div className="w-16 h-16 bg-safety-orange/20 border-2 border-safety-orange flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-display text-cream mb-2">
              Projects Loading
            </h3>
            <p className="text-silver">
              Fetching the latest projects from GitHub...
            </p>
          </div>
        )}

        {/* View More Link */}
        <div className="mt-12">
          <Link
            href="https://github.com/davie3"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-electric-cyan text-navy font-semibold text-lg transition-all duration-300 hover:bg-safety-orange hover:scale-105 active:scale-95"
          >
            <span>View All Projects on GitHub</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
