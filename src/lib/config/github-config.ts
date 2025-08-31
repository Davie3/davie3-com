import { z } from 'zod';
import type { GitHubConfig } from '@/types/config-types';

/**
 * GitHub API configuration constants.
 */
export const GITHUB_CONFIG: GitHubConfig = {
  revalidateInterval: 3600, // 1 hour in seconds
} as const;

/**
 * Zod schema for validating GitHub repository API responses.
 */
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
