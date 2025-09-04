'use client';

import type { JSX } from 'react';
import Link from 'next/link';
import type { AnimatedButtonProps } from '@/types/component-types';
import { cn } from '@/lib/utils/class-utils';
import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  BUTTON_BASE_CLASSES,
} from '@/constants/ui-constants';

export function AnimatedButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  disabled = false,
}: AnimatedButtonProps): JSX.Element {
  const classes = cn(
    BUTTON_BASE_CLASSES,
    BUTTON_VARIANTS[variant],
    BUTTON_SIZES[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
