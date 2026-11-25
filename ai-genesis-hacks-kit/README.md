# AI Genesis Hacks 2027 — implementation and QA kit

**Status:** Planning + reusable test scaffolding; not an implementation of the website. No tests have been executed against the NSDC app because the application repository was not provided.

This kit is aligned with the AI Genesis Hacks README supplied on November 16, 2026 and the selected stack: React, Vite, TypeScript, Tailwind CSS, Cloudflare Pages (static hosting). It keeps Luma, Devpost, Discord, and GitHub as separate services.

## Contents
- `PROJECT_PLAN.md`: phased delivery plan, requirements, responsibilities, dependencies, quality gates.
- `FEATURE_BACKLOG.csv`: importable backlog with feature IDs, priority, acceptance criteria, ownership and dependencies.
- `TEST_MATRIX.csv`: traceable test inventory including manual, unit, E2E, accessibility, responsive, and deployment checks.
- `CONTENT_CONTRACT.md`: authoritative README-derived facts, outstanding confirmations, no-invention rules.
- `harness/`: starter content model, Vitest data tests, Playwright browser tests, axe accessibility scans, and CI workflow.

## Installation in an existing NSDC React + Vite repository
1. Review `CONTENT_CONTRACT.md` and compare with the latest approved master event document.
2. Copy files from `harness/` into the matching repository paths; merge `.github/workflows/qa.yml` with existing CI rather than overwrite it.
3. If the real repository already has an event data module, adapt the sample `src/data/event.ts` and its unit tests to the actual schema. Do not overwrite verified content.
4. Install dev dependencies: `npm install -D vitest @playwright/test @axe-core/playwright`.
5. Add the scripts shown in `harness/QA_SETUP.md` to `package.json`; preserve existing scripts and lockfile.
6. Run `npx playwright install chromium`, `npm run build`, `npm run test:unit`, and `npm run test:e2e`.
7. E2E tests define an explicit DOM contract (IDs and accessible labels) described in `harness/QA_SETUP.md`; adapt tests or implement those semantics before calling the suite operational.
8. Once Cloudflare Pages is deployed, validate production separately with `E2E_BASE_URL=https://actual-site.pages.dev npm run test:e2e`.

**No deployment, app implementation, CI execution, or stakeholder approval has been claimed by this planning kit.**
