import { useEffect, useMemo, useState } from 'react';
import { event } from '../data/event';
import { formatDisplayDate, zonedDateTimeToUtc } from '../lib/format';

function splitRemaining(ms: number) {
  const clamped = Math.max(0, ms);
  const days = Math.floor(clamped / 86_400_000);
  const hours = Math.floor((clamped % 86_400_000) / 3_600_000);
  const minutes = Math.floor((clamped % 3_600_000) / 60_000);
  const seconds = Math.floor((clamped % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const start = useMemo(
    () => zonedDateTimeToUtc(event.date, event.schedule[0].time, event.timezone),
    [],
  );
  const [now, setNow] = useState(() => Date.now());
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const remaining = splitRemaining(start.getTime() - now);
  const started = start.getTime() <= now;
  const cells = [
    { label: 'Days', value: remaining.days },
    { label: 'Hours', value: remaining.hours },
    { label: 'Minutes', value: remaining.minutes },
    { label: 'Seconds', value: remaining.seconds },
  ];

  return (
    <div className="mt-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-fog uppercase">
        {started ? 'Event day' : 'Countdown to check-in'}
      </p>
      {reduceMotion ? (
        <p className="mt-2 text-sm text-fog">
          {formatDisplayDate(event.date)} · 8:30 AM Pacific Time
        </p>
      ) : (
        <dl className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
          {cells.map((cell) => (
            <div
              key={cell.label}
              className="rounded-2xl border border-line bg-panel/70 px-2 py-3 text-center sm:px-3"
            >
              <dt className="text-[0.65rem] tracking-[0.14em] text-fog uppercase">{cell.label}</dt>
              <dd className="mt-1 font-display text-xl font-bold text-snow sm:text-2xl">
                {started ? '00' : String(cell.value).padStart(2, '0')}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
