'use client';

import { forwardRef } from 'react';

import { cn } from '@/lib/utils/class-utils';

import type { CardVariant } from '@/types/ui-types';
import type { ReactNode } from 'react';

type CardProps = {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
  languageColor?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className, children, languageColor, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'group relative transform-gpu overflow-hidden rounded-xl transition-all duration-300',
          // Hover lift (respects reduced motion)
          'motion-safe:hover:-translate-y-1',

          // Variant styles
          variant === 'default' &&
            cn(
              'bg-navy-accent/40 border-electric-cyan/20 border-2',
              'hover:border-electric-cyan/30',
              'hover:shadow-[0_8px_30px_rgba(0,212,255,0.12)]',
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
          variant === 'featured' &&
            cn(
              'bg-navy-accent/50 border-electric-cyan/35 border-2',
              'shadow-[0_4px_20px_rgba(0,212,255,0.1)]',
              'hover:border-electric-cyan/60',
              'hover:shadow-[0_12px_40px_rgba(0,212,255,0.25)]',
            ),

          className,
        )}
        {...props}
      >
        {/* Language accent stripe */}
        {languageColor && (
          <span
            className="absolute top-0 left-0 h-[2px] w-0 transition-all duration-500 ease-out group-hover:w-full"
            style={{ backgroundColor: languageColor }}
            aria-hidden="true"
          />
        )}
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
