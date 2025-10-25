/**
 * Configuration-related type definitions.
 */

export interface Star {
  readonly id: number;
  readonly x: number;
  readonly y: number;
  readonly size: number;
  readonly opacity: number;
  readonly color: string;
  readonly gradientStop: number;
}

export interface NavLink {
  readonly name: string;
  readonly href: string;
  readonly openInNewTab?: boolean;
}

export interface GitHubConfig {
  readonly revalidateInterval: number;
}
