/**
 * Component-related type definitions.
 */
export interface ComponentProps {
  readonly children?: React.ReactNode;
  readonly className?: string;
}

export interface LayoutProps {
  readonly children: React.ReactNode;
}

/**
 * Loading skeleton component types
 */
export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'card';

export type SkeletonProps = ComponentProps & {
  readonly variant?: SkeletonVariant;
  readonly width?: string | number;
  readonly height?: string | number;
  readonly count?: number;
};

/**
 * Animated button component types
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type AnimatedButtonProps = ComponentProps & {
  readonly href?: string;
  readonly onClick?: () => void;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly external?: boolean;
  readonly disabled?: boolean;
};
