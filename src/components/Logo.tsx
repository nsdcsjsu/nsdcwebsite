import { cn } from '../lib/cn';

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <span className={cn('inline-flex min-w-0 items-center gap-2.5', className)}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="#10192a" stroke="rgba(255,255,255,0.14)" />
        <circle cx="16" cy="13" r="5.2" fill="none" stroke="#3ee0a4" strokeWidth="1.7" />
        <circle cx="12.2" cy="19" r="5.2" fill="none" stroke="#f5c14a" strokeWidth="1.7" />
        <circle cx="19.8" cy="19" r="5.2" fill="none" stroke="#8b9cff" strokeWidth="1.7" />
      </svg>
      {showWordmark ? (
        <span className="truncate font-display text-sm font-bold tracking-tight text-snow sm:text-base">
          AI Genesis Hacks
        </span>
      ) : null}
    </span>
  );
}
