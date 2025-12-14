import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:4173',
    trace: 'on-first-retry',
    headless: true,
  },
  projects:
    process.env.CI === 'true'
      ? [
          {
            name: 'chromium',
            use: {
              ...devices['Desktop Chrome'],
              launchOptions: {
                chromiumSandbox: false,
                args: [
                  '--no-sandbox',
                  '--disable-setuid-sandbox',
                  '--single-process',
                  '--disable-dev-shm-usage',
                ],
              },
            },
          },
        ]
      : [
          {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
          },
        ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe',
    timeout: 60 * 1000,
  },
});
