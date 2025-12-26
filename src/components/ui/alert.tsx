'use client';

import {
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
  X,
} from 'lucide-react';
import { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils/class-utils';
import type { AlertVariant } from '@/types/ui-types';
import type { ReactNode } from 'react';

type AlertProps = {
  variant?: AlertVariant;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      dismissible = false,
      onDismiss,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
      setIsVisible(false);
      onDismiss?.();
    };

    if (!isVisible) return null;

    const icons = {
      success: CheckCircle2,
      error: AlertCircle,
      warning: AlertTriangle,
      info: Info,
    };

    const Icon = icons[variant];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          // Base styles
          'relative p-4 rounded-lg border-2',
          'flex items-start gap-3',
          'animate-[slideIn_0.3s_ease-out]',

          // Variant styles
          variant === 'success' &&
            cn('bg-electric-cyan/10 border-electric-cyan/30', 'text-cream'),
          variant === 'error' &&
            cn('bg-safety-orange/10 border-safety-orange/50', 'text-cream'),
          variant === 'warning' &&
            cn('bg-safety-orange/5 border-safety-orange/30', 'text-silver'),
          variant === 'info' &&
            cn('bg-navy-accent/60 border-electric-cyan/20', 'text-silver'),

          className,
        )}
        {...props}
      >
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          <Icon
            className={cn(
              'w-5 h-5',
              variant === 'success' && 'text-electric-cyan',
              variant === 'error' && 'text-safety-orange',
              variant === 'warning' && 'text-safety-orange',
              variant === 'info' && 'text-electric-cyan',
            )}
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-sm font-medium leading-relaxed">
          {children}
        </div>

        {/* Dismiss button */}
        {dismissible && (
          <button
            onClick={handleDismiss}
            className={cn(
              'flex-shrink-0 p-1 rounded transition-colors duration-200',
              'hover:bg-white/10 focus:outline-none focus:ring-2',
              variant === 'success' && 'focus:ring-electric-cyan/50',
              variant === 'error' && 'focus:ring-safety-orange/50',
              variant === 'warning' && 'focus:ring-safety-orange/50',
              variant === 'info' && 'focus:ring-electric-cyan/50',
            )}
            aria-label="Dismiss alert"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  },
);

Alert.displayName = 'Alert';
