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
