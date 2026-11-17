import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('relative z-10 scroll-mt-28 py-16 sm:py-20', className)}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="font-display text-xs font-semibold tracking-[0.22em] text-cta uppercase">
          {eyebrow}
        </p>
        <h2
          id={headingId}
          className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-fog sm:text-lg">{description}</p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
