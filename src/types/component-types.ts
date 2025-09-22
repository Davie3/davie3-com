/**
 * Component-related type definitions.
 */
type ComponentProps = {
  readonly children?: React.ReactNode;
  readonly className?: string;
};

/**
 * Loading skeleton component types
 */
type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'card';

export type SkeletonProps = ComponentProps & {
  readonly variant?: SkeletonVariant;
  readonly width?: string | number;
  readonly height?: string | number;
  readonly count?: number;
};
