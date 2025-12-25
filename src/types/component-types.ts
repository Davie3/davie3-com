/**
 * Component-related type definitions.
 */

/**
 * Loading skeleton component types
 */
export type SkeletonProps = {
  readonly children?: React.ReactNode;
  readonly className?: string;
  readonly variant?: 'text' | 'circular' | 'rectangular' | 'card';
  readonly width?: string | number;
  readonly height?: string | number;
  readonly count?: number;
};
