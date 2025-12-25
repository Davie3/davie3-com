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

export type NebulaCloud = {
  readonly id: number;
  readonly x: number;
  readonly y: number;
  readonly radius: number;
  readonly baseOpacity: number;
  readonly color: string;
  readonly gradientStops: readonly {
    readonly offset: number;
    readonly alpha: number;
  }[];
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

export type LayerConfig = {
  readonly speed: number;
  readonly zIndex: number;
  readonly particleCount: number;
};

export type CanvasConfig = {
  readonly targetFps: number;
  readonly viewportBuffer: number;
  readonly layers: {
    readonly background: LayerConfig;
    readonly middle: LayerConfig;
    readonly foreground: LayerConfig;
  };
};

export type NavLink = {
  readonly name: string;
  readonly href: string;
  readonly openInNewTab?: boolean;
};

export type GitHubConfig = {
  readonly revalidateInterval: number;
};
