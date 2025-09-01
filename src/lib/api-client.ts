import { EXTERNAL_URLS } from '../constants/urls';
import { GITHUB_CONFIG } from './config/github-config';
import type { GitHubRepo, ApiError } from '../types/api-types';

/**
 * API client configuration and helper functions.
 */

/**
 * Fetches GitHub repositories for the user.
 */
export const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(EXTERNAL_URLS.GITHUB_API, {
      next: { revalidate: GITHUB_CONFIG.revalidateInterval },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

/**
 * Generic API error handler.
 */
export const handleApiError = (error: unknown): ApiError => {
  const timestamp = new Date().toISOString();

  if (error instanceof Error) {
    return {
      error: error.message,
      status: 500,
      timestamp,
    };
  }

  return {
    error: 'An unknown error occurred',
    status: 500,
    timestamp,
  };
};

/**
 * Creates a standardized fetch wrapper with error handling.
 */
export const apiClient = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw handleApiError(error);
  }
};
