/** Format a date-only ISO string as a long en-US weekday date. */
export function formatDisplayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day, 12));
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(utc);
}

/** Convert 24-hour `HH:mm` to a 12-hour label such as `8:30 AM`. */
export function formatTime12h(hhmm: string): string {
  const [hourRaw, minuteRaw] = hhmm.split(':');
  const hour24 = Number(hourRaw);
  const minute = Number(minuteRaw);
  const suffix = hour24 >= 12 ? 'PM' : 'AM';
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${String(minute).padStart(2, '0')} ${suffix}`;
}

/** Convert a wall-clock time in a named zone to a UTC Date. */
export function zonedDateTimeToUtc(date: string, hhmm: string, timeZone: string): Date {
  const [year, month, day] = date.split('-').map(Number);
  const [hour, minute] = hhmm.split(':').map(Number);
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, 0);

  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  const asUtcMs = (ms: number) => {
    const parts = dtf.formatToParts(new Date(ms));
    const value = (type: Intl.DateTimeFormatPartTypes) =>
      Number(parts.find((part) => part.type === type)?.value);
    return Date.UTC(
      value('year'),
      value('month') - 1,
      value('day'),
      value('hour'),
      value('minute'),
      value('second'),
    );
  };

  return new Date(utcGuess - (asUtcMs(utcGuess) - utcGuess));
}
