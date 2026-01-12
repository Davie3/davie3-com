'use client';

import { forwardRef } from 'react';

import { cn } from '@/lib/utils/class-utils';

import type { ReactNode } from 'react';

type LabelProps = {
  htmlFor?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  className?: string;
  children: ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, required, helperText, error, className, children, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label
          ref={ref}
          htmlFor={htmlFor}
          className={cn(
            'block text-sm font-medium tracking-wide transition-colors duration-200',
            error ? 'text-safety-orange' : 'text-cream',
            'relative inline-flex items-center gap-1',
            className,
          )}
          {...props}
        >
          {children}
          {required && (
            <span className="text-safety-orange ml-0.5 font-bold" aria-label="required">
              *
            </span>
          )}
        </label>
        {helperText && (
          <p
            className={cn(
              'text-xs transition-colors duration-200',
              error ? 'text-safety-orange/80' : 'text-silver/70',
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Label.displayName = 'Label';
