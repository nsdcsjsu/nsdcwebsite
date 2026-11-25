# QA harness setup and interface contract

This is a **starter testing harness**, not a claim that tests currently pass. The real application must implement/adapt the stated selectors, semantics and source-data schema. Configure the existing Vite repo first, run locally, then review with NSDC contributors.

## Install
```bash
npm install -D vitest @playwright/test @axe-core/playwright
npx playwright install chromium
```

Add/merge in the actual `package.json` scripts:
```json
{
  "scripts": {
    "test:unit": "vitest run",
    "test:e2e": "playwright test",
    "test:a11y": "playwright test tests/e2e/accessibility.spec.ts"
  }
}
```

Run:
```bash
npm run build
npm run test:unit
npm run test:e2e
npm run test:a11y
# After deployment and approval:
E2E_BASE_URL=https://YOUR-APP.pages.dev npm run test:e2e
```

## Required UI/DOM conventions
- One semantic `<main>` landmark.
- Hero `<h1>` includes `AI Genesis Hacks`; tagline appears exactly as `Impact. Security. Intelligence.`.
- Section IDs are `about`, `tracks`, `schedule`, `awards`, `sponsors`, `faq`, `rules`, `organizers`.
- Each track has a heading (e.g., `<h3>Impact</h3>`); four award labels appear as text.
- Timeline displays recognizable 12-hour local times `8:30 AM`, `5:00 PM`, `7:30 PM`.
- Real link URLs used verbatim (Luma/Discord/MLH policy/mailto). No `href="#"`, empty links or placeholder anchor elements.
- Rules missing URL shows informational text such as `Rules coming soon` or a truly disabled button.
- Mobile navigation button accessible name includes `Open menu` or `Open navigation`, and opened menu has a semantic navigation landmark and Tracks link.
- Include descriptive `<title>` and `<meta name="description">` in `index.html`.

If product design differs (e.g., multi-page React Router rather than anchors), update E2E selectors **only after checking that the acceptance criteria remain met**. Do not weaken tests just to turn them green.

## Recommended tools
- **Vitest**: source content contract and small unit tests.
- **Playwright**: browser E2E, responsive, navigation, links, basic metadata.
- **@axe-core/playwright**: automatic WCAG A/AA violations (manual tests still needed).
- **Lighthouse CI** (optional once design stabilizes): performance, accessibility, SEO, budgets. Use three runs with consistent environment to reduce variance.

## Release gates
- PR: build, Vitest, Playwright on desktop and mobile, axe; required reviewers; no P0 defects.
- Before public launch: check event facts, external targets, keyboard and screen-reader smoke, phone viewports, gradient, hero overlap, social preview.
- After production deployment: run E2E with `E2E_BASE_URL` set to the exact deployed URL; verify actual Luma page manually (E2E does not fetch third-party pages).
- Day of event: confirm schedule, rule link (if published), Discord invite, Luma, and Devpost link (if published).

## Important limitations
- Automated axe cannot prove complete accessibility.
- `scrollWidth` tests detect broad overflow but not element overlap or disappearing gradients; those need screenshot/manual review.
- Browser tests check link targets in HTML, not the health or correctness of external third-party pages.
- Cloudflare free-plan compliance and potential future paid domains must be reviewed by the team when deployment is configured. GitHub Actions is free for standard runners on public repos; for private NSDC repos, monitor the included usage and storage budgets to avoid unexpected charges.
- Screenshot visual regression can be introduced after marketing locks the visual design; do not snapshot an unstable mockup as a release baseline.
