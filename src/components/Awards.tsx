import { event } from '../data/event';
import { Section } from './Section';

export function Awards() {
  return (
    <Section
      id="awards"
      eyebrow="Awards"
      title="Four categories. Prize amounts coming later."
      description="Winning teams are recognized across Best Overall and each track. Monetary prize values will be published only after events leadership confirms them."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {event.awards.map((award, index) => (
          <li
            key={award.name}
            className={`rounded-3xl border p-6 ${
              index === 0
                ? 'border-cta/40 bg-cta/10 sm:col-span-2'
                : 'border-line bg-panel/80'
            }`}
          >
            <p className="text-xs tracking-[0.16em] text-fog uppercase">
              {index === 0 ? 'Headline award' : 'Track award'}
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-snow">{award.name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
