# Project Plan — AI Genesis Hacks 2027

## Objective and non-goals
Publish a no-cost, polished, accessible, responsive event website that quickly answers *what/when/where/who/how to join*, drives visitors to the real Luma registration link, and presents track, schedule, award, sponsor, rules, and organizer information accurately.

**Stack:** React + Vite + TypeScript; Tailwind CSS; CSS animations and optional Motion for React; Cloudflare Pages static hosting (`pages.dev` until/unless NSDC approves a domain); NSDC-owned GitHub with individual contributor accounts. No database, auth, custom signup, submissions, judging tool, attendance platform, or admin dashboard in the initial scope.

**Source-of-truth rule:** The finalized events-team document supersedes the README when explicitly approved. Changes must be logged and checked before publishing. Avoid hardcoding event copy throughout JSX; use a typed event data module.

## Sitemap / user journeys
- Default: single landing page with semantic anchors: `#about`, `#tracks`, `#schedule`, `#awards`, `#sponsors`, `#faq`, `#rules`, `#organizers`. Hero and footer include registration links.
- User journey A (participant): social preview → see event date/eligibility/tracks → click Luma → read schedule / joining instructions → visit Discord.
- Journey B (sponsor): find professional event overview → sponsor section → contact email.
- Journey C (returning participant): schedule/deadline/rules/Discord → optionally Devpost link once confirmed.
- Journey D (organizer): update typed content → PR review → preview deployment → production deployment.

## Phases and exit criteria (sequenced, not invented commitments)
| Phase | Activities | Primary owner(s) | Exit gate |
|---|---|---|---|
| 0. Intake/requirements | GitHub access, approved event source, section inventory, free hosting decision, marketing palette/assets | President, events, marketing, developer | Scope approved; repo accessible; unknown details labeled pending |
| 1. Foundation | Initialize React/Vite/TS/Tailwind, lint/formatter, data schema, semantic page shell, Cloudflare preview | Developer | Build passes and public preview works |
| 2. Core experience | Hero, navbar, sections, Luma/Discord/mailto, full schedule, track cards, awards, sponsors placeholder, FAQ, rules, organizers | Developer + events/marketing content owners | F01-F14 acceptance criteria verified |
| 3. Design polish | Responsive navbar, gradients on small screens, motion/reduced motion, focus styles, image optimization, metadata | Developer + marketing | Mobile/tablet/desktop review and design sign-off |
| 4. QA and pilot | Unit, browser, accessibility, content audit, external-link review, sponsor/stakeholder UAT | Developer + NSDC reviewers | All P0 checks pass; no P0/P1 defects |
| 5. Deploy/release | NSDC-controlled Cloudflare Pages, main branch gate, site URL shared, launch smoke, owner handoff | Developer + President | Approved production live; tested Luma link; documented rollback |
| 6. Event operations | Recheck logistics, rules, links; freeze unreviewed major changes; incident contacts and quick-fix owner | Events + developer | Links and schedule accurate ahead of Feb 13, 2027 |
| 7. Post-event | Add approved winners/Devpost results, preserve archive and handoff docs | Events + developer | Results confirmed, website archived and ownership recorded |

### Suggested communication rhythm
- Tuesday 9 PM web-dev check-in: demo current preview, review outstanding approvals, identify risks, assign next tasks.
- Discord web-dev channel: single coordination location; post PR links, staging URLs, blockers and requested decisions.
- Draft acceptance criteria before coding features; use screenshots and brief PR notes for visual review.

## Project architecture
```
NSDC GitHub (PR reviews, required CI)
  -> Vite build / static assets
  -> Cloudflare Pages (preview on PR, production from main)
  -> Browser: React UI, CSS, optional animations
  -> Outbound user actions: Luma / Discord / Devpost when provided / email
```
No secret keys or backend necessary for the current site. Event metadata and content are versioned within the repository. GitHub Actions is free for standard runners on public repositories; for private NSDC repositories, monitor the included usage/storage quota to keep CI at $0.

## Modules / implementation guidance
- `src/data/event.ts`: typed authoritative event information (example in harness).
- `src/components/`: semantic `Header`, `Hero`, `TrackCard`, `Timeline`, `Awards`, `SponsorGrid`, `FAQ`, `Rules`, `OrganizerGrid`, `Footer`.
- `src/styles/`: design tokens for spacing, color, typography, dark gradients and reduced-motion rules.
- External actions centralized as URLs, with `target="_blank" rel="noopener noreferrer"` only where opening new tabs is intentional.
- Every section has a stable ID and semantic heading. Avoid unnecessary router complexity until distinct pages are justified.
- Handle absent content explicitly: no invented sponsors; no clickable unavailable Devpost/rules link; no unconfirmed prize amount.

## Risk register
| Risk | Impact | Mitigation |
|---|---|---|
| Incomplete venue approval, prizes, rules, sponsors, Devpost URL | Incorrect public information | Pending statuses, events-team confirmation before publishing |
| Design changes and missing assets | Rework | Agree on marketing palette, component tokens, staged PR reviews |
| Mobile gradient disappears or buttons overlap | Broken visitor experience | Dedicated mobile E2E/visual checklist at 320/375/768 px |
| Developers unfamiliar with framework | Slow delivery | Keep React+Vite, typed content, simple component boundaries |
| Free-tier/deployment misconfiguration | Site unavailable | Build `npm run build`, output `dist`, smoke test Cloudflare URL |
| External URLs stale | Missed registration | Manual link verification before launch and day-of |
| Client-rendered SEO limitations | Poor search previews | Metadata, Open Graph, crawl testing; optional prerender if warranted |
| Scope expansion into accounts/judging | Delivery risk | Log as future proposal; require stakeholder authorization |

## Definition of Done (P0)
1. All F01-F14 completed and approved against source-of-truth event details.
2. Type checking, production build, unit tests and browser smoke tests pass in CI.
3. No known P0 or P1 defects; link/CTA audit passes on production.
4. Accessibility automation reports no WCAG A/AA violations; manual keyboard checks done.
5. Responsive checks at 320, 375, 768, 1280 and 1440 px, with no horizontal overflow, overlap or lost gradients.
6. Performance reviewed under mobile throttling: target Lighthouse performance >=85, accessibility >=95, best practices >=95 and SEO >=90, with LCP <=2.5 s and CLS <=0.1 as targets, not guarantees. Use multiple comparable runs and document exceptions.
7. Cloudflare Pages project controlled by NSDC, free subdomain functioning, rollback available.
8. Stakeholder signoff (events factual accuracy, marketing design, president release).
9. Handoff: repository, edit workflow, contacts, deployment settings, and content dependencies documented.
