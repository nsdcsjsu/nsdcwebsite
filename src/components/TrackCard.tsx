import type { EventTrack } from '../data/event';
import { cn } from '../lib/cn';

const themes: Record<string, { ring: string; glow: string; icon: string }> = {
  impact: { ring: 'border-impact/55', glow: 'bg-impact', icon: '🌍' },
  security: { ring: 'border-security/60', glow: 'bg-security', icon: '🔒' },
  intelligence: { ring: 'border-intelligence/70', glow: 'bg-intelligence', icon: '🧠' },
};

type TrackCardProps = {
  track: EventTrack;
};

export function TrackCard({ track }: TrackCardProps) {
  const theme = themes[track.id] ?? themes.impact;
  return (
    <article className={cn('bezel relative overflow-hidden rounded-2xl border bg-panel/80 p-6', theme.ring)}>
      <span className={cn('absolute top-0 left-0 h-1 w-full', theme.glow)} aria-hidden="true" />
      <p className="text-2xl" aria-hidden="true">
        {theme.icon}
      </p>
      <h3 className="mt-4 font-display text-2xl font-bold text-snow">{track.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-fog sm:text-base">{track.description}</p>
    </article>
  );
}
