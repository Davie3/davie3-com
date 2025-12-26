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
import {
  PORTFOLIO_PAGE,
  PORTFOLIO_CONTENT,
} from '@/constants/pages/portfolio-page';
import { GITHUB_REPO_SCHEMA } from '@/types/api-types';
import type { GitHubRepo } from '@/types/api-types';
import type { Metadata } from 'next';
import type { JSX } from 'react';

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
            <p className="text-xl text-electric-cyan font-semibold mb-4">
              {PORTFOLIO_CONTENT.HERO_SUBTITLE}
            </p>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-silver max-w-3xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <Link
                key={project.name}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{
                  animationDelay: `${(index * PAGE_STAGGER_DELAYS.PORTFOLIO_REPOS).toString()}ms`,
                }}
              >
                <Card className="h-full p-4 hover:shadow-md hover:border-electric-cyan">
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
                </Card>
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
      </BorderedSection>
    </main>
  );
}
