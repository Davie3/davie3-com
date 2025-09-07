import { z } from 'zod';

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
    size: z.number(),
  }),
);

/**
 * API-related type definitions.
 */
export type GitHubRepo = z.infer<typeof GITHUB_REPO_SCHEMA>[number];

export type ApiResponse<T> = {
  readonly data: T;
  readonly success: boolean;
  readonly message?: string;
};

export type ApiError = {
  readonly error: string;
  readonly status: number;
  readonly timestamp: string;
};
