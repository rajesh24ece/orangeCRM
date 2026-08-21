import { Page } from "@playwright/test";
import { InputHelper } from "../helpers/inputHelper.js";
import { LoginLocators } from "../locators/loginLocators.js";
import { ClickHelper } from "../helpers/clickHelper.js";
import { AssertionHelper } from "../helpers/assertionHelper.js";
import { LoginText } from "../utils/text.js";
import logger from '../utils/logger.js';


export class LoginPage {

    readonly #page: Page;

    constructor(page: Page) {
        this.#page = page;
    }


    async login(userName: string, password: string): Promise<void> {
        await InputHelper.fillByPlaceholder(this.#page, LoginLocators.username, userName);
        logger.info(`Entered username: ${userName}`)
        await InputHelper.fillByPlaceholder(this.#page, LoginLocators.password, password);
        logger.info(`Entered password: ${password}`)
        await ClickHelper.clickByRole(this.#page, LoginText.login);
        logger.info(`Clicked: ${LoginText.login} button`);
    }

    async verifySuccessfulLogin(): Promise<void> {
        await AssertionHelper.assertUrl(this.#page, LoginText.landingPage);
    }

    async verifyInvalidCredentialsError(): Promise<void> {
        await AssertionHelper.asserttoHaveText(this.#page.locator(LoginLocators.invalidCredentials), LoginText.invalidCredentials);
    }

    async verifyRequiredUserNameFieldErrors(): Promise<void> {
        const usernameGroup = this.#page
            .locator(LoginLocators.inputGroup)
            .filter({ has: this.#page.getByPlaceholder(LoginLocators.username) });
        await AssertionHelper.asserttoHaveText(
            usernameGroup.locator(LoginLocators.validation),
            LoginText.required
        );
    }

    async verifyRequiredPasswordFieldErrors(): Promise<void> {
        const passwordGroup = this.#page
            .locator(LoginLocators.inputGroup)
            .filter({ has: this.#page.getByPlaceholder(LoginLocators.password) });
        await AssertionHelper.asserttoHaveText(
            passwordGroup.locator(LoginLocators.validation),
            LoginText.required
        );
    }



}