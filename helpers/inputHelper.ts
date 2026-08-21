import { Page } from "@playwright/test";
import { logAndRethrow } from "../utils/failedLogger.js";


export class InputHelper {


    static async fillByPlaceholder(page: Page, placeHolder: string, data: string) {
        try {
            await page.getByPlaceholder(placeHolder).fill(data);            
        } catch (error: unknown) {
            logAndRethrow(error,data);
        }
    }



}

