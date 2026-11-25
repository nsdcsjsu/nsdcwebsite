import { event } from '../data/event';
import { Section } from './Section';

function awardFrame(name: string, index: number) {
  if (index === 0 || /overall/i.test(name)) {
    return 'border-2 border-cta bg-cta/10 shadow-[inset_0_1px_0_rgb(216_222_232/0.22),0_0_36px_-10px_rgb(166_124_45/0.85)] sm:col-span-2';
  }
  if (/impact/i.test(name)) return 'bezel border border-impact/55 bg-impact/10';
  if (/security/i.test(name)) return 'bezel border border-security/60 bg-security/10';
  if (/intelligence/i.test(name)) return 'bezel border border-intelligence/70 bg-intelligence/10';
  return 'bezel border border-line bg-panel/80';
}

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
            className={`rounded-2xl p-6 ${awardFrame(award.name, index)}`}
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
