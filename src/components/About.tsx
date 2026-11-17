import { event } from '../data/event';
import { formatDisplayDate } from '../lib/format';
import { Section } from './Section';

export function About() {
  const facts = [
    { label: 'Date', value: formatDisplayDate(event.date) },
    { label: 'Format', value: event.formatLabel },
    { label: 'Cost', value: event.free ? 'Free' : 'See details' },
    { label: 'Eligibility', value: `${event.minimumAge}+` },
    { label: 'Team size', value: `Up to ${event.maximumTeamSize} members` },
    {
      label: 'Venue',
      value:
        event.location.approval === 'needs_event_approval'
          ? `${event.location.label} (confirmation pending)`
          : event.location.label,
    },
  ];

  return (
    <Section
      id="about"
      eyebrow="About"
      title="Build what communities need next."
      description={event.summary}
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((fact) => (
          <article key={fact.label} className="rounded-2xl border border-line bg-panel/80 p-5">
            <p className="text-xs tracking-[0.16em] text-fog uppercase">{fact.label}</p>
            <p className="mt-2 text-lg font-semibold text-snow">{fact.value}</p>
          </article>
        ))}
      </div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-3">
        {event.benefits.map((benefit) => (
          <li key={benefit} className="rounded-2xl border border-dashed border-line px-4 py-4 text-sm text-fog">
            {benefit}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-fog">
        Solo registrants can find a team at the event. Teams choose one track when submitting.
      </p>
    </Section>
  );
}
