/**
 * Configuration-related type definitions.
 */

export type Star = {
  readonly id: number;
  readonly x: number;
  readonly y: number;
  readonly size: number;
  readonly opacity: number;
  readonly color: string;
  readonly gradientStop: number;
};

export type NavLink = {
  readonly name: string;
  readonly href: string;
  readonly openInNewTab?: boolean;
};

export type GitHubConfig = {
  readonly revalidateInterval: number;
};
