import { cn } from '../lib/cn';

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <span className={cn('inline-flex min-w-0 items-center gap-2.5', className)}>
      <span className="inline-flex h-9 w-9 shrink-0 overflow-hidden">
        <img
          src="/brand/genesis-crest.jpg"
          alt=""
          className="h-full w-full scale-[1.08] object-cover object-center"
        />
      </span>
      {showWordmark ? (
        <span className="min-w-0 truncate font-display text-sm font-bold tracking-[0.04em] text-snow sm:text-base">
          AI Genesis Hacks
        </span>
      ) : null}
    </span>
  );
}
