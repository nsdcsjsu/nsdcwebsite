import { test, expect } from '@playwright/test';

// DOM contract: one main landmark and semantic section IDs; read QA_SETUP.md.
test.beforeEach(async ({ page }) => { await page.goto('/'); });

test('identity and primary CTA are present', async ({ page }) => {
  await expect(page.getByRole('main')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/AI Genesis Hacks/i);
  await expect(page.getByText('Impact. Security. Intelligence.', { exact: true }).first()).toBeVisible();
  await expect(page.locator('a[href="https://luma.com/sxb7ae0h"]').first()).toBeVisible();
});

test('confirmed external actions point to correct URLs', async ({ page }) => {
  await expect(page.locator('a[href="https://luma.com/sxb7ae0h"]').first()).toHaveAttribute('href', 'https://luma.com/sxb7ae0h');
  await expect(page.locator('a[href="https://discord.gg/qeuDjHztQF"]').first()).toBeVisible();
  await expect(page.locator('a[href="mailto:nsdcsjsu@gmail.com"]').first()).toBeVisible();
  await expect(page.locator('a[href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"]').first()).toBeVisible();
});

test('all required semantic sections exist', async ({ page }) => {
  for (const id of ['about', 'tracks', 'schedule', 'awards', 'sponsors', 'faq', 'rules', 'organizers']) {
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  }
});

test('three tracks and four awards are represented', async ({ page }) => {
  const tracks = page.locator('#tracks');
  for (const track of ['Impact', 'Security', 'Intelligence']) {
    await expect(tracks.getByRole('heading', { name: track, exact: true })).toBeVisible();
  }
  const awards = page.locator('#awards');
  for (const award of [
    'Best Overall Project', 'Best Impact Track Project',
    'Best Security Track Project', 'Best Intelligence Track Project',
  ]) {
    await expect(awards.getByText(award, { exact: true })).toBeVisible();
  }
});

test('schedule shows key times and deadline', async ({ page }) => {
  const schedule = page.locator('#schedule');
  await expect(schedule).toContainText('8:30 AM');
  await expect(schedule).toContainText('5:00 PM');
  await expect(schedule).toContainText('7:30 PM');
  await expect(schedule).toContainText(/Project submissions due/i);
});

test('pending event rules are not a dead link', async ({ page }) => {
  const rules = page.locator('#rules');
  await expect(rules).toContainText(/coming soon|to be announced|pending/i);
  await expect(rules.locator('a[href="#"], a[href=""], button:not([disabled])', { hasText: /rules/i })).toHaveCount(0);
});

test('no empty or placeholder links are active', async ({ page }) => {
  await expect(page.locator('a[href="#"], a[href=""], a:not([href])')).toHaveCount(0);
});

test('tracks anchor can be deep-linked', async ({ page }) => {
  await page.goto('/#tracks');
  await expect(page.locator('#tracks')).toBeVisible();
  await expect(page).toHaveURL(/#tracks$/);
});

test('metadata describes the event', async ({ page }) => {
  await expect(page).toHaveTitle(/AI Genesis Hacks/i);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.{20,}/);
});

test('no horizontal overflow at common viewport widths', async ({ page }) => {
  for (const width of [320, 375, 768, 1280, 1440]) {
    await page.setViewportSize({ width, height: 820 });
    await page.evaluate(async () => { await document.fonts.ready; });
    const widths = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      client: document.documentElement.clientWidth,
    }));
    expect(widths.scroll, `Horizontal overflow at ${width}px`).toBeLessThanOrEqual(widths.client + 1);
  }
});

test('mobile navigation is accessible', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile-specific test');
  const menu = page.getByRole('button', { name: /open (the )?(menu|navigation)|menu/i });
  await expect(menu).toBeVisible();
  await menu.click();
  await expect(page.getByRole('navigation').getByRole('link', { name: /tracks/i }).first()).toBeVisible();
});
