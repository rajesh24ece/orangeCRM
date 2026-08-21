import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({
    path: '.env.qe',
});

export default defineConfig({
    // Test location
    testDir: './tests',

    // Run tests in parallel when possible
    fullyParallel: true,

    // Fail the build if test.only is accidentally committed
    forbidOnly: !!process.env.CI,

    // Retry failed tests only in CI
    retries: process.env.CI ? 2 : 0,

    // One worker locally and in CI
    // Prevents multiple browser instances running simultaneously
    workers: 1,

    // Test timeout
    timeout: 30 * 1000,

    // Assertion timeout
    expect: {
        timeout: 5 * 1000,
    },

    // Reporter
    reporter: [
        ['html', { open: 'never' }],
        ['list'],
    ],

    // Shared settings
    use: {
        baseURL: process.env.BASE_URL,

        // Browser
        headless: false,

        // Debugging / failure evidence
        trace: 'on-first-retry',
        screenshot: 'on',
        video: 'on',

        // Browser context
        ...devices['Desktop Chrome'],
    },

    // Browser projects
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
});