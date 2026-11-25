import { event } from '../data/event';
import { formatTime12h } from '../lib/format';
import { Section } from './Section';

export function Timeline() {
  return (
    <Section
      id="schedule"
      eyebrow="Schedule"
      title="One full day, Pacific Time."
      description="All times are Pacific Time (America/Los_Angeles). Project submissions are due at 5:00 PM."
    >
      <ol className="space-y-3">
        {event.schedule.map((item) => {
          const isDeadline = /submissions due/i.test(item.activity);
          return (
            <li
              key={`${item.time}-${item.activity}`}
              className="grid grid-cols-[5.75rem_minmax(0,1fr)] gap-3 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4"
            >
              <p className="pt-3 text-sm font-semibold whitespace-nowrap text-cta">
                {formatTime12h(item.time)}
              </p>
              <div className="bezel min-w-0 rounded-xl border border-line bg-panel/70 px-4 py-3">
                <p className="font-medium text-snow">{item.activity}</p>
                {isDeadline ? (
                  <p className="mt-1 text-xs tracking-wide text-security uppercase">Deadline</p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
