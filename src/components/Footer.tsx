import { event } from '../data/event';
import { sectionNav } from '../data/nav';
import { ExternalLink } from './ExternalLink';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-abyss/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-fog">{event.tagline}</p>
          <p className="mt-3 text-sm text-fog">Organized by {event.organizerName}.</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-fog uppercase">On this page</p>
          <ul className="mt-3 space-y-2">
            {sectionNav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-snow hover:text-cta">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-fog uppercase">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="text-snow hover:text-cta" href={`mailto:${event.contactEmail}`}>
                {event.contactEmail}
              </a>
            </li>
            <li>
              <ExternalLink href={event.discordUrl} className="text-snow hover:text-cta">
                Discord
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={event.registrationUrl} className="text-snow hover:text-cta">
                Register on Luma
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={event.codeOfConductUrl} className="text-snow hover:text-cta">
                Code of Conduct
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-4 py-6 text-center text-xs text-fog">
        © 2027 {event.organizerName}
      </p>
    </footer>
  );
}
