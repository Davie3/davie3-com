import type { JSX } from 'react';
import Link from 'next/link';
import { GitFork, Star } from 'lucide-react';
import { z } from 'zod';

const GITHUB_API_URL =
  'https://api.github.com/search/repositories?q=user:davie3+fork:false&sort=stars&direction=desc';

const gitHubRepoSchema = z.array(
  z.object({
    name: z.string(),
    description: z.string().nullable(),
    html_url: z.string().url(),
    language: z.string().nullable(),
    stargazers_count: z.number(),
    forks_count: z.number(),
  }),
);

type GitHubRepo = z.infer<typeof gitHubRepoSchema>[number];

async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(GITHUB_API_URL, {
      // Revalidate data at most once per hour
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error('Failed to fetch GitHub repos:', response.statusText);
      return [];
    }

    const data = await response.json();
    const validationResult = gitHubRepoSchema.safeParse(data.items);

    if (!validationResult.success) {
      console.error('GitHub repo validation failed:', validationResult.error);
      return [];
    }

    return validationResult.data;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
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
    <main className="container mx-auto max-w-4xl px-4 py-24">
      <section id="portfolio">
        <h1 className="text-4xl font-bold text-primary">My Public Portfolio</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Here is a selection of my public projects from GitHub. In addition to
          these, I have extensive experience developing and maintaining internal
          tools and systems for enterprise environments.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between rounded-lg border bg-card p-6 text-card-foreground transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <h3 className="text-xl font-semibold text-primary">
                {project.name}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span className="rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                {project.language || 'N/A'}
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star size={16} />
                  <span>{project.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork size={16} />
                  <span>{project.forks_count}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
