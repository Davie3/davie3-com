import type { ReactNode } from 'react';

// Button variant types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Input variant types
export type InputVariant = 'default' | 'error' | 'success';
export type IconPosition = 'left' | 'right';

// Alert variant types
export type AlertVariant = 'success' | 'error' | 'warning' | 'info';

// Card variant types
export type CardVariant = 'default' | 'glass' | 'elevated';

// Shared component props
export type BaseComponentProps = {
  className?: string;
  children?: ReactNode;
};
