'use client';

import { forwardRef } from 'react';

import { cn } from '@/lib/utils/class-utils';

import type { ButtonVariant, ButtonSize } from '@/types/ui-types';
import type { ReactNode } from 'react';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      className,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- intentional: disabled OR loading (boolean logic)
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          // Base styles
          'flex-center relative inline-flex gap-2.5',
          'text-sm font-bold tracking-wide uppercase',
          'rounded-lg border-2 transition-all duration-200',
          'group overflow-hidden',

          // Focus styles
          'focus:ring-offset-navy focus:ring-2 focus:ring-offset-2 focus:outline-none',

          // Size variants
          size === 'sm' && 'px-4 py-2 text-xs',
          size === 'md' && 'px-6 py-3.5 text-sm',
          size === 'lg' && 'px-8 py-4 text-base',

          // Variant styles
          variant === 'primary' &&
            cn(
              'bg-electric-cyan text-navy border-electric-cyan',
              'hover:bg-safety-orange hover:border-safety-orange',
              'focus:ring-electric-cyan',
              'shadow-electric-cyan/20 hover:shadow-safety-orange/20 shadow-lg',
              !isDisabled && 'active:scale-95',
            ),
          variant === 'secondary' &&
            cn(
              'bg-navy-accent text-cream border-electric-cyan/30',
              'hover:bg-navy-light hover:border-electric-cyan/50',
              'focus:ring-electric-cyan/50',
              !isDisabled && 'active:scale-95',
            ),
          variant === 'outline' &&
            cn(
              'text-electric-cyan border-electric-cyan bg-transparent',
              'hover:bg-electric-cyan/10 hover:border-electric-cyan',
              'focus:ring-electric-cyan',
              !isDisabled && 'active:scale-95',
            ),
          variant === 'ghost' &&
            cn(
              'text-cream border-transparent bg-transparent',
              'hover:bg-navy-accent/50',
              'focus:ring-electric-cyan/50',
              !isDisabled && 'active:scale-95',
            ),

          // Disabled state
          isDisabled && 'cursor-not-allowed opacity-50',

          className,
        )}
        aria-busy={loading}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <div className="flex-center absolute inset-0 bg-inherit">
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}

        {/* Content */}
        <span
          className={cn('inline-flex items-center gap-2', loading && 'invisible')}
          aria-hidden={loading}
        >
          {icon && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="inline-flex">{icon}</span>}
        </span>

        {/* Shimmer effect on hover (only for primary) */}
        {variant === 'primary' && !isDisabled && (
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
