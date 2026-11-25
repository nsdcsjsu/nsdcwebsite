# Development and handoff

This repository is the public AI Genesis Hacks 2027 website. Event facts live in `src/data/event.ts`. The README and `ai-genesis-hacks-kit/CONTENT_CONTRACT.md` are the content contract: do not invent prize amounts, sponsors, Devpost URLs, rules URLs, or a confirmed ballroom booking.

## Stack

- React 19, Vite, TypeScript, Tailwind CSS v4
- Optional Motion for React section fades (honors `prefers-reduced-motion`)
- Cloudflare Pages static hosting (`dist/`)
- Vitest for content-contract unit tests
- Playwright + axe for browser and accessibility smoke tests

## Scripts

```bash
npm install
npm run dev
npm run build
npm run test:unit
npx playwright install chromium
npm run test:e2e
npm run test:a11y
```

After a Pages deploy:

```bash
E2E_BASE_URL=https://YOUR-PROJECT.pages.dev npm run test:e2e
```

## Edit workflow

1. Change approved copy in `src/data/event.ts` (tracks, schedule, awards, URLs, FAQ).
2. Open a pull request. GitHub Actions runs `build`, unit tests, and Playwright.
3. Review the Cloudflare Pages preview URL.
4. Merge to `main` for production after events (facts), marketing (design), and president (release) sign-off.

Pending fields stay `null` or empty until approved: `devpostUrl`, `rulesUrl`, `prizePoolAmount`, `sponsors`, `organizers`. Venue `approval` must remain `needs_event_approval` until the ballroom booking is confirmed.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22
- Production branch: `main`
- Compatibility config: `wrangler.toml`

The GitHub workflow does not deploy. NSDC should connect the GitHub repository to a Cloudflare Pages project under NSDC-controlled credentials.

## Contacts

- Event / logistics: events team via Discord web-dev channel
- Visual identity: marketing
- Release: NSDC president / website lead
- Implementation: web developers
- Public contact: nsdcsjsu@gmail.com
