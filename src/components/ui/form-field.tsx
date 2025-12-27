'use client';

import { forwardRef } from 'react';

import { cn } from '@/lib/utils/class-utils';

import { Label } from './label';

import type { ReactNode } from 'react';

type FormFieldProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      label,
      name,
      error,
      required = false,
      helperText,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        <Label
          htmlFor={name}
          required={required}
          error={!!error}
          helperText={!error ? helperText : undefined}
        >
          {label}
        </Label>

        {children}

        {error && (
          <p
            id={`${name}-error`}
            className="text-sm text-safety-orange font-medium animate-[slideIn_0.2s_ease-out]"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormField.displayName = 'FormField';
