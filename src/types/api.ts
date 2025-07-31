import type { z } from 'zod';
import type { GITHUB_REPO_SCHEMA } from '@/constants/github';

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
