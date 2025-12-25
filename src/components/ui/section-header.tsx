import type { JSX } from 'react';
import { cn } from '@/lib/utils/class-utils';

type SectionHeaderProps = {
  label: string;
  heading: string;
  headingLevel?: 'h1' | 'h2' | 'h3';
  className?: string;
  showDivider?: boolean;
};

export function SectionHeader({
  label,
  heading,
  headingLevel = 'h1',
  className,
  showDivider = true,
}: SectionHeaderProps): JSX.Element {
  const HeadingTag = headingLevel;

  return (
    <div className={cn('space-y-4', className)}>
      {/* Label with optional divider */}
      <div className="flex items-center gap-4">
        {showDivider && <div className="h-px w-12 bg-safety-orange" />}
        <span className="font-accent text-sm tracking-wider uppercase text-silver">
          {label}
        </span>
      </div>

      {/* Heading */}
      <HeadingTag
        className={cn(
          'font-display leading-tight text-cream',
          headingLevel === 'h1' && 'text-7xl md:text-8xl',
          headingLevel === 'h2' && 'text-3xl md:text-4xl',
          headingLevel === 'h3' && 'text-2xl md:text-3xl',
        )}
      >
        {heading}
      </HeadingTag>
    </div>
  );
}
