import type { JSX, ReactNode } from 'react';
import { cn } from '@/lib/utils/class-utils';

type BorderedSectionProps = {
  label: string;
  heading: string;
  headingLevel?: 'h2' | 'h3';
  borderSide?: 'left' | 'top';
  borderColor?: 'safety-orange' | 'electric-cyan';
  children?: ReactNode;
  className?: string;
};

export function BorderedSection({
  label,
  heading,
  headingLevel = 'h2',
  borderSide = 'left',
  borderColor = 'safety-orange',
  children,
  className,
}: BorderedSectionProps): JSX.Element {
  const HeadingTag = headingLevel;

  return (
    <section
      className={cn(
        'pl-8',
        borderSide === 'left' && 'border-l-4',
        borderSide === 'top' && 'border-t-4 pt-8 pl-0',
        borderColor === 'safety-orange' && 'border-safety-orange',
        borderColor === 'electric-cyan' && 'border-electric-cyan',
        className,
      )}
    >
      {/* Section label */}
      <span className="font-accent text-sm tracking-wider uppercase text-silver block mb-2">
        {label}
      </span>

      {/* Section heading */}
      <HeadingTag
        className={cn(
          'font-display text-cream',
          headingLevel === 'h2' && 'text-3xl md:text-4xl',
          headingLevel === 'h3' && 'text-2xl md:text-3xl',
        )}
      >
        {heading}
      </HeadingTag>

      {/* Optional children content */}
      {children && <div className="mt-6">{children}</div>}
    </section>
  );
}
