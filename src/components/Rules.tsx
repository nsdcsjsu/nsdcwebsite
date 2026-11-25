import { event } from '../data/event';
import { ExternalLink } from './ExternalLink';
import { Section } from './Section';

export function Rules() {
  return (
    <Section
      id="rules"
      eyebrow="Rules"
      title="Play fairly. Full rules are still being finalized."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-3xl border border-line bg-panel/80 p-6">
          <h3 className="font-display text-xl font-bold text-snow">Event rules</h3>
          {event.rulesUrl ? (
            <ExternalLink href={event.rulesUrl} className="mt-4 inline-flex font-semibold text-cta">
              Read the event rules
            </ExternalLink>
          ) : (
            <p className="mt-4 text-fog">
              Rules coming soon. The events team will publish the full document here when it is
              approved. This is not a link yet.
            </p>
          )}
        </article>
        <article className="rounded-3xl border border-line bg-panel/80 p-6">
          <h3 className="font-display text-xl font-bold text-snow">Code of Conduct</h3>
          <p className="mt-4 text-fog">
            Participants are expected to follow the MLH Code of Conduct as this event&apos;s policy.
            That does not mean MLH is sponsoring or affiliated with AI Genesis Hacks.
          </p>
          <ExternalLink
            href={event.codeOfConductUrl}
            className="mt-4 inline-flex font-semibold text-cta underline-offset-2 hover:underline"
          >
            MLH Code of Conduct
          </ExternalLink>
        </article>
      </div>
    </Section>
  );
}
