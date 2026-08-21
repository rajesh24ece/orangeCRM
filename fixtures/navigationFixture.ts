import { test as base, Page } from '@playwright/test';
import { NavigationHelper } from '../helpers/navigationHelper.js';

type MyFixtures = {
  launchPage: Page;
};

export const test = base.extend<MyFixtures>({
    launchPage: async ({page}, use) => {
     await NavigationHelper.pageGoTo(page,process.env.BASE_URL!);
        await use(page);
    }
});

