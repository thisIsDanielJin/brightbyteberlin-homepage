import { test } from '@playwright/test';

test('full page', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:3000/s/wordpress-alternative', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/body-full.png', fullPage: true });
});
