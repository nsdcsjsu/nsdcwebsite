import { useEffect, useState } from 'react';
import { event } from '../data/event';
import { sectionNav } from '../data/nav';
import { cn } from '../lib/cn';
import { ExternalLink } from './ExternalLink';
import { Logo } from './Logo';

function NavLinks({ onNavigate, compact }: { onNavigate?: () => void; compact?: boolean }) {
  return (
    <ul className={cn('flex gap-1', compact ? 'flex-wrap' : 'flex-col')}>
      {sectionNav.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={cn(
              'block text-snow hover:bg-white/5',
              compact
                ? 'rounded-full px-2.5 py-1.5 text-sm text-fog hover:text-snow'
                : 'rounded-xl px-3 py-3 text-base',
            )}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const sync = () => {
      setIsDesktop(media.matches);
      if (media.matches) setOpen(false);
    };
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const onKey = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-void/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="/" className="flex min-w-0" aria-label="AI Genesis Hacks home">
            <Logo />
          </a>
          <ExternalLink
            href={event.registrationUrl}
            className="ml-auto inline-flex shrink-0 items-center rounded-full bg-cta px-3 py-2 text-sm font-semibold text-cta-ink transition hover:brightness-110"
          >
            Register
          </ExternalLink>
          {isDesktop ? null : (
            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-snow"
              aria-expanded={open}
              aria-controls="site-navigation"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((current) => !current)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          )}
        </div>
        {isDesktop ? (
          <nav aria-label="Primary" className="mt-2">
            <NavLinks compact />
          </nav>
        ) : null}
      </div>
      {!isDesktop && open ? (
        <nav id="site-navigation" aria-label="Primary" className="border-t border-line bg-abyss px-4 py-3">
          <NavLinks onNavigate={() => setOpen(false)} />
        </nav>
      ) : null}
    </header>
  );
}
