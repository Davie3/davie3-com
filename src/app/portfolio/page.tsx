import { GitFork, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { z } from 'zod';

import { BorderedSection } from '@/components/ui/bordered-section';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { PAGE_STAGGER_DELAYS } from '@/constants/config/animation-config';
import { EXTERNAL_API } from '@/constants/config/external-api-config';
import { GITHUB_CONFIG } from '@/constants/config/github-config';
import { PAGE_METADATA } from '@/constants/config/site-metadata';
import { PORTFOLIO_PAGE, PORTFOLIO_CONTENT } from '@/constants/pages/portfolio-page';
import { GITHUB_REPO_SCHEMA } from '@/types/api-types';

import type { GitHubRepo } from '@/types/api-types';
import type { Metadata } from 'next';
import type { JSX } from 'react';

/** GitHub linguist language colors for indicator dots */
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572a5',
  Go: '#00add8',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Ruby: '#701516',
  Java: '#b07219',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Swift: '#f05138',
  Kotlin: '#a97bff',
  Dart: '#00b4ab',
  PHP: '#4f5d95',
  Lua: '#000080',
};

export const metadata: Metadata = PAGE_METADATA.PORTFOLIO;

const GITHUB_API = EXTERNAL_API.GITHUB.USER_REPOS_ENDPOINT;

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
            <SectionHeader
              label={PORTFOLIO_PAGE.SECTION_LABEL}
              heading={PORTFOLIO_PAGE.HEADING}
              headingLevel="h1"
              className="mb-3"
            />
            <p className="text-electric-cyan mb-4 text-xl font-semibold">
              {PORTFOLIO_CONTENT.HERO_SUBTITLE}
            </p>
          </div>

          <p className="text-silver max-w-3xl text-lg leading-relaxed md:text-xl">
            {PORTFOLIO_CONTENT.PAGE_INTRO}
          </p>
        </div>
      </section>

      {/* Projects Section - Vertical Timeline */}
      <BorderedSection
        label={PORTFOLIO_PAGE.FEATURED_LABEL}
        heading={PORTFOLIO_PAGE.FEATURED_HEADING}
        headingLevel="h2"
        className="mb-12"
      >
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                key={project.name}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-stagger-fade-in group block"
                style={{
                  animationDelay: `${(index * PAGE_STAGGER_DELAYS.PORTFOLIO_REPOS).toString()}ms`,
                }}
              >
                <Card className="h-full p-4 transition-all duration-300 hover:border-[rgba(0,212,255,0.4)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.15)]">
                  {/* Project header */}
                  <div className="mb-3">
                    <h3 className="font-display text-cream group-hover:text-electric-cyan mb-2 text-lg leading-tight transition-colors duration-300 md:text-xl">
                      {project.name}
                    </h3>
                    <p className="text-silver text-md leading-snug">
                      {project.description ?? PORTFOLIO_PAGE.PROJECT_NO_DESCRIPTION}
                    </p>
                  </div>

                  {/* Project footer - language + stats */}
                  <div className="border-electric-cyan/10 text-silver flex items-center gap-4 border-t pt-3 text-xs">
                    {project.language && (
                      <div className="flex items-center gap-1.5">
                        <span
                          className="inline-block h-3 w-3 rounded-full"
                          style={{
                            backgroundColor:
                              LANGUAGE_COLORS[project.language] ?? 'var(--color-silver)',
                          }}
                          aria-hidden="true"
                        />
                        <span className="font-medium">{project.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-electric-cyan" />
                      <span className="font-medium">{project.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} className="text-safety-orange" />
                      <span className="font-medium">{project.forks_count}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border-electric-cyan/20 bg-navy-accent/20 border-2 p-12 text-center">
            <div className="bg-safety-orange/20 border-safety-orange mx-auto mb-4 flex h-20 w-20 items-center justify-center border-4">
              <span className="text-3xl">🔧</span>
            </div>
            <h3 className="font-display text-cream mb-2 text-2xl">
              {PORTFOLIO_PAGE.EMPTY_STATE_HEADING}
            </h3>
            <p className="text-silver text-lg">{PORTFOLIO_PAGE.EMPTY_STATE_MESSAGE}</p>
          </div>
        )}

        {/* View More Link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="https://github.com/davie3"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-electric-cyan text-navy hover:bg-safety-orange inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>{PORTFOLIO_PAGE.VIEW_ALL_BUTTON}</span>
            <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </Link>
        </div>
      </BorderedSection>
    </main>
  );
}
