import { expect, Locator, Page } from "@playwright/test";
import { logAndRethrow } from "../utils/failedLogger.js";



export class AssertionHelper {


    static async asserttoHaveText(locator: Locator, text: string) {
        try {
            await expect(locator).toHaveText(text);
        } catch (error: unknown) {
            logAndRethrow(error, text);
        }
    }

    static async assertUrl(page:Page, url: string){
        try {
            await expect(page).toHaveURL(url);
        } catch (error: unknown) {
            logAndRethrow(error, url);
        }
    }



}