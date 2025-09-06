import type { JSX } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GitFork, Star } from 'lucide-react';

import { EXTERNAL_URLS } from '@/constants/site-config';
import { GITHUB_REPO_SCHEMA } from '@/types/api-types';
import { GITHUB_CONFIG } from '@/lib/config/github-config';
import { PAGE_METADATA } from '@/lib/config/site-metadata';
import type { GitHubRepo } from '@/types/api-types';

export const metadata: Metadata = PAGE_METADATA.PORTFOLIO;

async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(EXTERNAL_URLS.GITHUB_API, {
      // Revalidate data at most once per hour
      next: { revalidate: GITHUB_CONFIG.revalidateInterval },
    });

    if (!response.ok) {
      // Log error only in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to fetch GitHub repos:', response.statusText);
      }
      return [];
    }

    const data = await response.json();
    const validationResult = GITHUB_REPO_SCHEMA.safeParse(data.items);

    if (!validationResult.success) {
      // Log validation errors only in development
      if (process.env.NODE_ENV === 'development') {
        console.error('GitHub repo validation failed:', validationResult.error);
      }
      return [];
    }

    return validationResult.data;
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
 *
 * @returns The rendered portfolio page.
 */
export default async function PortfolioPage(): Promise<JSX.Element> {
  const projects = await getGitHubRepos();

  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-accent/5 via-purple-accent/5 to-cyan-accent/5 rounded-3xl" />
        <div className="relative glass rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-accent to-cyan-accent rounded-full flex items-center justify-center">
              <span className="text-navy font-bold text-xl">💼</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                My Portfolio
              </h1>
              <p className="text-slate-dark mt-1">
                Public projects and contributions
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-slate-light">
            Here is a selection of my public projects from GitHub. In addition
            to these, I have extensive experience developing and maintaining
            internal tools and systems for enterprise environments.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            Featured Projects
          </h2>
          <p className="text-slate-dark">
            Open source contributions and personal projects
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                key={project.name}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card p-6 flex flex-col justify-between h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-light group-hover:text-blue-accent transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-accent to-purple-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <p className="text-slate-dark leading-relaxed mb-4">
                    {project.description || 'No description available'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-navy-accent/30">
                  <div className="flex items-center gap-3">
                    {project.language && (
                      <span className="px-3 py-1 bg-navy-accent rounded-full text-xs font-medium text-cyan-accent">
                        {project.language}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-dark">
                    <div className="flex items-center gap-1 group-hover:text-blue-accent transition-colors duration-300">
                      <Star size={14} />
                      <span>{project.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-purple-accent transition-colors duration-300">
                      <GitFork size={14} />
                      <span>{project.forks_count}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-accent/20 to-purple-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-bold text-slate-light mb-2">
              Projects Loading
            </h3>
            <p className="text-slate-dark">
              Fetching the latest projects from GitHub...
            </p>
          </div>
        )}

        {/* View More Link */}
        <div className="mt-12 text-center">
          <Link
            href={EXTERNAL_URLS.GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass rounded-xl font-semibold text-slate-light transition-all duration-300 hover:scale-105 hover:bg-navy-accent/50 group"
          >
            <span>View All Projects on GitHub</span>
            <div className="w-5 h-5 bg-gradient-to-r from-blue-accent to-purple-accent rounded transition-transform duration-300 group-hover:scale-110" />
          </Link>
        </div>
      </section>
    </main>
  );
}
