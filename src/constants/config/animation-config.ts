import type { LayerType } from '@/types/config-types';

export const ANIMATION_DURATIONS = {
  FAST: 0.2,
  NORMAL: 0.3,
  MEDIUM: 0.4,
  SLOW: 0.5,
  SPRING: 0.6,
  SLOWER: 0.7,
} as const;

export const CANVAS_CONFIG = {
  targetFps: 60,
  viewportBuffer: 100,
  layers: {
    background: { speed: 0.1, zIndex: 0, particleCount: 600 },
    middle: { speed: 0.5, zIndex: 1, particleCount: 800 },
    foreground: { speed: 1.0, zIndex: 2, particleCount: 600 },
  },
} as const;

export const STAR_CONFIG = {
  COUNT: 500,
  COLORS: ['#FFFFFF', '#CCD6F6', '#64FFDA'] as const,
  SIZE_RANGE: { MIN: 0.5, MAX: 3 },
  OPACITY_RANGE: { MIN: 0.4, MAX: 0.9 },
  GRADIENT_RANGE: { MIN: 50, MAX: 80 },
  TWINKLE_DURATION: { MIN: 2, MAX: 4 },
  TWINKLE_DELAY: { MIN: 0.5, MAX: 3.5 },
  STAGGER_DELAY: 0.01,
  TWINKLE_SPEED_RANGE: { MIN: 0.5, MAX: 2.0 },
  COLORS_BY_LAYER: {
    background: ['#FFFFFF', '#CCD6F6'] as const,
    middle: ['#CCD6F6', '#64FFDA'] as const,
    foreground: ['#64FFDA', '#FFFFFF'] as const,
  },
  SIZE_BY_LAYER: {
    background: { MIN: 0.5, MAX: 1.5 },
    middle: { MIN: 1.0, MAX: 2.5 },
    foreground: { MIN: 1.5, MAX: 3.0 },
  },
} as const;

export const SHOOTING_STAR_CONFIG = {
  SPAWN_INTERVAL: { MIN: 8000, MAX: 15000 },
  LENGTH_RANGE: { MIN: 40, MAX: 80 },
  SPEED_RANGE: { MIN: 200, MAX: 400 },
  LIFETIME_RANGE: { MIN: 1000, MAX: 2000 },
  COLOR: '#ff6b35',
  ANGLE_RANGE: { MIN: -45, MAX: -30 },
  POOL_SIZE: 5,
} as const;

export const PAGE_ANIMATION = {
  DURATION: ANIMATION_DURATIONS.NORMAL,
  Y_OFFSET: 10,
} as const;
