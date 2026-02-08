'use client';

import { forwardRef } from 'react';

import { cn } from '@/lib/utils/class-utils';

import type { InputVariant, IconPosition } from '@/types/ui-types';
import type { ReactNode } from 'react';

type InputProps = {
  variant?: InputVariant;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  error?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = 'default', icon, iconPosition = 'left', error, className, disabled, ...props },
    ref,
  ) => {
    const hasIcon = !!icon;

    return (
      <div className="group relative w-full">
        {/* Icon */}
        {hasIcon && iconPosition === 'left' && (
          <div
            className="pointer-events-none absolute top-1/2 left-4 z-10 -translate-y-1/2"
            aria-hidden="true"
          >
            <div
              className={cn(
                'transition-colors duration-200',
                variant === 'error'
                  ? 'text-safety-orange'
                  : variant === 'success'
                    ? 'text-electric-cyan'
                    : 'text-silver group-focus-within:text-electric-cyan',
              )}
            >
              {icon}
            </div>
          </div>
        )}

        {/* Input */}
        <input
          ref={ref}
          disabled={disabled}
          className={cn(
            // Base styles
            'w-full rounded-lg px-4 py-3.5 font-medium',
            'bg-navy-accent/50 backdrop-blur-sm',
            'border-2 transition-all duration-200',
            'text-cream placeholder:text-silver/50',
            'outline-none',

            // Icon padding
            hasIcon && iconPosition === 'left' && 'pl-12',
            hasIcon && iconPosition === 'right' && 'pr-12',

            // Variant styles
            variant === 'default' &&
              cn(
                'border-electric-cyan/20',
                'focus:border-electric-cyan focus:ring-electric-cyan/30 focus:shadow-[0_0_12px_rgba(0,212,255,0.15)] focus:ring-2',
                'hover:border-electric-cyan/40',
              ),
            variant === 'error' &&
              cn(
                'border-safety-orange/50',
                'focus:border-safety-orange focus:ring-safety-orange/30 focus:ring-2',
              ),
            variant === 'success' &&
              cn(
                'border-electric-cyan/50',
                'focus:border-electric-cyan focus:ring-electric-cyan/30 focus:ring-2',
              ),

            // Disabled state
            disabled && 'bg-navy-accent/30 cursor-not-allowed opacity-50',

            className,
          )}
          aria-invalid={variant === 'error'}
          aria-describedby={error ? (props.id ? `${props.id}-error` : undefined) : undefined}
          {...props}
        />

        {/* Right Icon */}
        {hasIcon && iconPosition === 'right' && (
          <div
            className="pointer-events-none absolute top-1/2 right-4 z-10 -translate-y-1/2"
            aria-hidden="true"
          >
            <div
              className={cn(
                'transition-colors duration-200',
                variant === 'error'
                  ? 'text-safety-orange'
                  : variant === 'success'
                    ? 'text-electric-cyan'
                    : 'text-silver group-focus-within:text-electric-cyan',
              )}
            >
              {icon}
            </div>
          </div>
        )}

        {/* Focus glow effect */}
        <div
          className={cn(
            'pointer-events-none absolute inset-0 rounded-lg transition-opacity duration-200',
            'opacity-0 group-focus-within:opacity-100',
            variant === 'error' ? 'bg-safety-orange/5' : 'bg-electric-cyan/5',
          )}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';
