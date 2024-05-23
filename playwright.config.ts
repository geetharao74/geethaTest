//playwright.config.ts

import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

  testDir: './tests',
  outputDir: './test-report',

  timeout: 30 * 1000,

  expect: {

    timeout: 5000

  },
  reporter: 'html',

  use: {
    headless: false,
    actionTimeout: 0,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

};

export default config;