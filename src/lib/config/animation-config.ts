export interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  gradientStop: number;
}

export const ANIMATION_DURATIONS = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
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
} as const;
