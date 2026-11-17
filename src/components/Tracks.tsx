import { event } from '../data/event';
import { Section } from './Section';
import { TrackCard } from './TrackCard';

export function Tracks() {
  return (
    <Section
      id="tracks"
      eyebrow="Tracks"
      title="Choose a lens. Compete for Best Overall too."
      description="Teams pick one track at submission. Every project remains eligible for Best Overall."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {event.tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </Section>
  );
}
