'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils/class-utils';
import type { InputVariant } from '@/types/ui-types';

type TextareaProps = {
  variant?: InputVariant;
  error?: string;
  maxLength?: number;
  showCharCount?: boolean;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'default',
      error,
      maxLength,
      showCharCount = false,
      className,
      disabled,
      value,
      ...props
    },
    ref,
  ) => {
    const charCount = typeof value === 'string' ? value.length : 0;
    const showCounter = showCharCount && maxLength;

    return (
      <div className="relative w-full group">
        <textarea
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          className={cn(
            // Base styles
            'w-full px-4 py-3.5 rounded-lg font-medium',
            'bg-navy-accent/50 backdrop-blur-sm',
            'border-2 transition-all duration-200',
            'text-cream placeholder:text-silver/50',
            'outline-none resize-y min-h-[120px]',

            // Variant styles
            variant === 'default' &&
              cn(
                'border-electric-cyan/20',
                'focus:border-electric-cyan focus:ring-2 focus:ring-electric-cyan/30',
                'hover:border-electric-cyan/40',
              ),
            variant === 'error' &&
              cn(
                'border-safety-orange/50',
                'focus:border-safety-orange focus:ring-2 focus:ring-safety-orange/30',
              ),
            variant === 'success' &&
              cn(
                'border-electric-cyan/50',
                'focus:border-electric-cyan focus:ring-2 focus:ring-electric-cyan/30',
              ),

            // Disabled state
            disabled && 'opacity-50 cursor-not-allowed bg-navy-accent/30',

            // Extra padding for char counter
            showCounter && 'pb-8',

            className,
          )}
          aria-invalid={variant === 'error'}
          aria-describedby={
            error
              ? `${props.id}-error`
              : showCounter
                ? `${props.id}-char-count`
                : undefined
          }
          {...props}
        />

        {/* Character counter */}
        {showCounter && (
          <div
            id={`${props.id}-char-count`}
            className="absolute bottom-2 right-3 text-xs text-silver/60 font-mono"
            aria-live="polite"
            aria-atomic="true"
          >
            {charCount}/{maxLength}
          </div>
        )}

        {/* Focus glow effect */}
        <div
          className={cn(
            'absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-200',
            'opacity-0 group-focus-within:opacity-100',
            variant === 'error' ? 'bg-safety-orange/5' : 'bg-electric-cyan/5',
          )}
        />
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
