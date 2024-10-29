// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

//env file
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  snapshotPathTemplate: 'tests/snapshots/{arg}{ext}',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,

  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.1
    },
  },

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    ['json', { outputFile: 'report/json/report.json' }],
    ['html', { outputFolder: 'report/html' , open: 'never' }]
    ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'desktop-smoke-test',
      use: {
        ...devices['Desktop Chrome'],
        userAgent: 'staging-automation-test'
      },
      grep: /@smoke/
    },
    {
      name: 'mobile-device',
      use: {...devices['Pixel 7']},
      grep: /@mobile/,
      ignoreSnapshots: true
    },
    {
      name: 'edge',
      use: {...devices['Desktop Edge']},
    },
  ],
  /* Configure projects for major browsers */
//projects dihapus dulu

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

