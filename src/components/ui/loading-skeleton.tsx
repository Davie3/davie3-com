'use client';

import type { JSX } from 'react';
import type { SkeletonProps } from '@/types/component-types';
import { cn } from '@/lib/utils/class-utils';
import {
  SKELETON_BASE_CLASSES,
  SKELETON_VARIANTS,
} from '@/constants/ui-constants';

export function Skeleton({
  className = '',
  variant = 'text',
  width,
  height,
  count = 1,
}: SkeletonProps): JSX.Element {
  const style = {
    width: width || (variant === 'circular' ? '40px' : '100%'),
    height:
      height ||
      (variant === 'circular' ? '40px' : variant === 'card' ? '200px' : '20px'),
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={cn(
            SKELETON_BASE_CLASSES,
            SKELETON_VARIANTS[variant],
            className,
          )}
          style={style}
        />
      ))}
    </>
  );
}

export function ProjectCardSkeleton(): JSX.Element {
  return (
    <div className="card p-6 flex flex-col justify-between h-full">
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <Skeleton variant="text" width="60%" height="24px" />
          <Skeleton variant="circular" width="12px" height="12px" />
        </div>
        <Skeleton variant="text" count={3} className="mb-2" />
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-navy-accent/30">
        <Skeleton variant="rectangular" width="80px" height="24px" />
        <div className="flex items-center gap-4">
          <Skeleton variant="text" width="40px" />
          <Skeleton variant="text" width="40px" />
        </div>
      </div>
    </div>
  );
}

export function ExperienceCardSkeleton(): JSX.Element {
  return (
    <div className="card p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex-1">
          <Skeleton variant="text" width="70%" height="28px" className="mb-2" />
          <Skeleton variant="text" width="150px" height="20px" />
        </div>
        <Skeleton
          variant="rectangular"
          width="120px"
          height="28px"
          className="mt-2 md:mt-0"
        />
      </div>
      <Skeleton variant="text" count={3} />
    </div>
  );
}
