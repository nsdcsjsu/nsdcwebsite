import { event } from '../data/event';
import { Section } from './Section';

export function OrganizerGrid() {
  return (
    <Section
      id="organizers"
      eyebrow="Organizers"
      title="Built by students, for students."
      description={`${event.organizerName} organizes AI Genesis Hacks. Individual organizer names will be added here as they are approved.`}
    >
      <div className="bezel rounded-2xl border border-line bg-panel/80 p-6 sm:p-8">
        <p className="font-display text-2xl font-bold text-snow">{event.organizerName}</p>
        <p className="mt-3 max-w-3xl text-fog">
          NSDC at SJSU runs this one-day hackathon. Contact the team at{' '}
          <a className="font-medium text-cta underline-offset-2 hover:underline" href={`mailto:${event.contactEmail}`}>
            {event.contactEmail}
          </a>
          .
        </p>
      </div>
      {event.organizers.length === 0 ? (
        <p className="mt-6 text-sm text-fog">
          Organizer roster will be published as names and photos are confirmed.
        </p>
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {event.organizers.map((person) => (
            <li key={person.name} className="bezel rounded-xl border border-line bg-panel p-5">
              {person.image ? (
                <img src={person.image} alt="" className="mb-3 h-16 w-16 rounded-full object-cover" />
              ) : null}
              <p className="font-semibold text-snow">{person.name}</p>
              {person.title ? <p className="text-sm text-fog">{person.title}</p> : null}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
