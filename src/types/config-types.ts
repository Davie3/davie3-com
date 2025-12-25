/**
 * Configuration-related type definitions.
 */

export type LayerType = 'background' | 'middle' | 'foreground';

export type CanvasStar = {
  readonly id: number;
  readonly x: number;
  readonly y: number;
  readonly size: number;
  readonly baseOpacity: number;
  readonly color: string;
  readonly layer: LayerType;
  readonly twinklePhase: number;
  readonly twinkleSpeed: number;
};

export type ShootingStar = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  lifetime: number;
  maxLifetime: number;
  active: boolean;
};

export type NavLink = {
  readonly name: string;
  readonly href: string;
  readonly openInNewTab?: boolean;
};

export type GitHubConfig = {
  readonly revalidateInterval: number;
};
