import { event } from '../data/event';
import { Section } from './Section';

export function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Verified answers only."
      description="If a detail is still pending approval, it is marked that way instead of guessed."
    >
      <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-panel/80">
        {event.faq.map((item) => (
          <details key={item.question} className="group px-5 py-1">
            <summary className="cursor-pointer list-none py-4 font-medium text-snow marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span aria-hidden="true" className="text-cta group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="pb-4 text-sm leading-relaxed text-fog sm:text-base">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
