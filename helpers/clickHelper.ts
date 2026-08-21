import { Page } from "@playwright/test";
import { logAndRethrow } from "../utils/failedLogger.js";


export class ClickHelper {


    static async clickByRole(page: Page, name:string) {
        try {
            await page.getByRole("button", {name: name} ).click();
        } catch (error: unknown) {
            logAndRethrow(error,'');
        }
    }



}

