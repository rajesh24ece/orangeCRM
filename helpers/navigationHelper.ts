import { Page } from '@playwright/test';
import logger from '../utils/logger.js';
import { logAndRethrow } from '../utils/failedLogger.js';


export class NavigationHelper {

    static async pageGoTo(page: Page, baseUrl: string): Promise<void> {
        try {
            await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
            logger.info(`Navigated to: ${baseUrl}`);
        } catch (error: unknown) {
            logAndRethrow(error, baseUrl);
        }
    }





}

