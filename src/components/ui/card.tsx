'use client';

import { forwardRef } from 'react';

import { cn } from '@/lib/utils/class-utils';

import type { CardVariant } from '@/types/ui-types';
import type { ReactNode } from 'react';

type CardProps = {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-xl transition-all duration-300',

          // Variant styles
          variant === 'default' &&
            cn(
              'bg-navy-accent/40 border-electric-cyan/20 border-2',
              'hover:border-electric-cyan/30',
            ),
          variant === 'glass' &&
            cn(
              'bg-navy-accent/30 border-electric-cyan/20 border-2 backdrop-blur-md',
              'shadow-electric-cyan/5 shadow-lg',
              'hover:border-electric-cyan/30 hover:shadow-electric-cyan/10',
            ),
          variant === 'elevated' &&
            cn(
              'bg-navy-accent/50 border-electric-cyan/30 border-2',
              'shadow-electric-cyan/10 shadow-2xl',
              'hover:shadow-electric-cyan/20',
            ),

          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';

// Card sub-components
type CardSubComponentProps = {
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const CardContent = forwardRef<HTMLDivElement, CardSubComponentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('p-6', className)} {...props}>
        {children}
      </div>
    );
  },
);

CardContent.displayName = 'CardContent';
