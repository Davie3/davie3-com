import type { JSX } from 'react';

/**
 * Component-related type definitions.
 */
export type ComponentProps = {
  readonly children?: React.ReactNode;
  readonly className?: string;
};

export type PageProps = {
  readonly params?: Record<string, string>;
  readonly searchParams?: Record<string, string | string[] | undefined>;
};

export type LayoutProps = {
  readonly children: React.ReactNode;
};

export type ComponentWithChildren<T = Record<string, unknown>> = T & {
  readonly children: React.ReactNode;
};

export type ComponentReturn = JSX.Element;

/**
 * Error boundary component types
 */
export type ErrorBoundaryState = {
  readonly hasError: boolean;
  readonly error?: Error;
};

export type ErrorBoundaryProps = ComponentProps & {
  readonly fallback?: React.ComponentType<{ error?: Error; reset: () => void }>;
};

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
