import { chromium } from 'playwright';

async function takeScreenshot() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  // Wait for notification to appear + cursor to start browsing
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'screenshot-hero-full.png' });

  // Crop right side detail
  await page.screenshot({
    path: 'screenshot-hero-visual.png',
    clip: { x: 550, y: 30, width: 850, height: 850 }
  });

  // Wait longer to catch cursor mid-browse further down the page
  await page.waitForTimeout(4000);
  await page.screenshot({ path: 'screenshot-hero-cursor.png' });
  await page.screenshot({
    path: 'screenshot-hero-cursor-detail.png',
    clip: { x: 550, y: 30, width: 850, height: 850 }
  });

  await browser.close();
  console.log('Hero screenshots saved');
}

takeScreenshot().catch(console.error);
