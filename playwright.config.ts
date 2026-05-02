import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: '.',
  testMatch: 'e2e-check.spec.ts',
  use: { viewport: { width: 1280, height: 900 }, headless: true },
});
