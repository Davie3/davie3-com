import type { GitHubConfig } from '@/types/config-types';

/**
 * GitHub API configuration constants.
 */
export const GITHUB_CONFIG: GitHubConfig = {
  revalidateInterval: 3600, // 1 hour in seconds
} as const;
