import { event } from '../data/event';
import { ExternalLink } from './ExternalLink';
import { Section } from './Section';

export function SponsorGrid() {
  return (
    <Section
      id="sponsors"
      eyebrow="Sponsors"
      title="Partner with the next wave of student builders."
      description="Confirmed sponsor names and logos will appear here after marketing approval. Until then, this page does not list placeholder brands."
    >
      {event.sponsors.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-line bg-panel/50 px-6 py-12 text-center">
          <p className="font-display text-xl font-bold text-snow">Sponsor lineup coming soon</p>
          <p className="mx-auto mt-3 max-w-xl text-fog">
            Interested in supporting meals, prizes, or mentorship? Reach the organizing team at{' '}
            <a className="font-medium text-cta underline-offset-2 hover:underline" href={`mailto:${event.contactEmail}`}>
              {event.contactEmail}
            </a>
            .
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {event.sponsors.map((sponsor) => (
            <li key={sponsor.name} className="rounded-2xl border border-line bg-panel p-6">
              {sponsor.href ? (
                <ExternalLink href={sponsor.href} className="block">
                  <img src={sponsor.image} alt={sponsor.name} className="mx-auto h-12 w-auto object-contain" />
                </ExternalLink>
              ) : (
                <img src={sponsor.image} alt={sponsor.name} className="mx-auto h-12 w-auto object-contain" />
              )}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
