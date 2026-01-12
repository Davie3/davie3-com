import { cn } from '@/lib/utils/class-utils';

import type { ReactNode } from 'react';

type PrivacySectionProps = {
  readonly title: string;
  readonly children: ReactNode;
  readonly hasBorder?: boolean;
  readonly className?: string;
};

export function PrivacySection({
  title,
  children,
  hasBorder = true,
  className,
}: PrivacySectionProps) {
  return (
    <section className={cn('mb-12', className)}>
      <h2 className="font-display text-cream mb-6 text-4xl md:text-5xl lg:text-6xl">{title}</h2>
      <div className={cn('space-y-6', hasBorder && 'border-safety-orange border-l-4 pl-8')}>
        {children}
      </div>
    </section>
  );
}

PrivacySection.displayName = 'PrivacySection';
