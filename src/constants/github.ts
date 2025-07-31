import { z } from 'zod';

/**
 * GitHub API related constants and schemas.
 */
export const GITHUB_CONFIG = {
  REVALIDATE_INTERVAL: 3600, // 1 hour in seconds
} as const;

export const GITHUB_REPO_SCHEMA = z.array(
  z.object({
    name: z.string(),
    description: z.string().nullable(),
    html_url: z.url(),
    language: z.string().nullable(),
    stargazers_count: z.number(),
    forks_count: z.number(),
  }),
);
