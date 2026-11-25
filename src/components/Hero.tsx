import { event } from '../data/event';
import { formatDisplayDate } from '../lib/format';
import { Countdown } from './Countdown';
import { ExternalLink } from './ExternalLink';
import { GenesisMark } from './GenesisMark';

const venueStatus =
  event.location.approval === 'needs_event_approval'
    ? `${event.location.label} · confirmation pending`
    : event.location.label;

export function Hero() {
  return (
    <div className="relative z-10 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:py-20">
        <div className="min-w-0">
          <p className="max-w-full font-display text-xs font-semibold tracking-[0.16em] text-cta uppercase">
            {event.organizerName}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.15rem,7.2vw,4.8rem)] leading-[0.98] font-bold tracking-tight text-snow">
            {event.name}
          </h1>
          <p className="mt-5 bg-linear-to-r from-impact to-cta bg-clip-text font-display text-lg font-semibold text-transparent sm:text-2xl">
            {event.tagline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-fog sm:text-lg">{event.summary}</p>
          <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <div className="bezel rounded-xl border border-line bg-panel/70 p-4">
              <dt className="text-fog">Date</dt>
              <dd className="mt-1 font-medium text-snow">{formatDisplayDate(event.date)}</dd>
            </div>
            <div className="bezel rounded-xl border border-line bg-panel/70 p-4">
              <dt className="text-fog">Venue</dt>
              <dd className="mt-1 font-medium wrap-break-word text-snow">{venueStatus}</dd>
            </div>
          </dl>
          <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ExternalLink
              href={event.registrationUrl}
              className="inline-flex items-center justify-center rounded-full bg-cta px-6 py-3 text-center font-semibold text-cta-ink transition hover:brightness-110"
            >
              Register on Luma
            </ExternalLink>
            <ExternalLink
              href={event.discordUrl}
              className="inline-flex items-center justify-center rounded-full border border-cta/45 bg-white/5 px-6 py-3 text-center font-semibold text-snow transition hover:bg-white/10"
            >
              Join Discord
            </ExternalLink>
            <a
              href="/ai-genesis-hacks.ics"
              className="inline-flex items-center justify-center rounded-full border border-cta/45 px-6 py-3 text-center font-semibold text-fog transition hover:bg-white/5 hover:text-snow"
            >
              Add to calendar
            </a>
          </div>
          <Countdown />
        </div>
        <div className="relative min-w-0">
          <GenesisMark />
          <p className="mt-2 text-center text-xs tracking-[0.18em] text-fog uppercase">
            Free · 18+ · Up to 4 members
          </p>
        </div>
      </div>
    </div>
  );
}
