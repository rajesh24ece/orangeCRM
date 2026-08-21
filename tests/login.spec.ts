import { test } from '../fixtures/navigationFixture.js';
import { LoginPage } from '../pages/loginPage.js';
import login from "../test-data/login.json" with { type: "json" };


test.describe('Validating login page', () => {

  test('with null username and null password', async ({ launchPage }) => {
    const validateLoginPage = new LoginPage(launchPage);
    await validateLoginPage.login(login.nullUserNamePassword.username, login.nullUserNamePassword.password);
    await validateLoginPage.verifyRequiredUserNameFieldErrors();
    await validateLoginPage.verifyRequiredPasswordFieldErrors();
  });

   test('with null username and valid password', async ({ launchPage }) => {
    const validateLoginPage = new LoginPage(launchPage);
    await validateLoginPage.login(login.nullUserNamePassword.username, login.validUser.password);
    await validateLoginPage.verifyRequiredUserNameFieldErrors();
  });

   test('with null username and invalid password', async ({ launchPage }) => {
    const validateLoginPage = new LoginPage(launchPage);
    await validateLoginPage.login(login.nullUserNamePassword.username, login.invalidPassword.password);
    await validateLoginPage.verifyRequiredUserNameFieldErrors();
  });

   test('with valid username and null password', async ({ launchPage }) => {
    const validateLoginPage = new LoginPage(launchPage);
    await validateLoginPage.login(login.validUser.username, login.nullUserNamePassword.password);
    await validateLoginPage.verifyRequiredPasswordFieldErrors();
  });

  test('with valid username and invalid password', async ({ launchPage }) => {
    const validateLoginPage = new LoginPage(launchPage);
    await validateLoginPage.login(login.validUser.username, login.invalidPassword.password);
    await validateLoginPage.verifyInvalidCredentialsError();
  });

  test('with invalid username and valid password', async ({ launchPage }) => {
    const validateLoginPage = new LoginPage(launchPage);
    await validateLoginPage.login(login.invalidUserName.username, login.validUser.password)
    await validateLoginPage.verifyInvalidCredentialsError();
  });

   test('with invalid username and null password', async ({ launchPage }) => {
    const validateLoginPage = new LoginPage(launchPage);
    await validateLoginPage.login(login.invalidUserName.username, login.nullUserNamePassword.password)
    await validateLoginPage.verifyRequiredPasswordFieldErrors();
  });

  test('with invalid username and invalid password', async ({ launchPage }) => {
    const validateLoginPage = new LoginPage(launchPage);
    await validateLoginPage.login(login.invalidUserName.username, login.invalidPassword.password)
    await validateLoginPage.verifyInvalidCredentialsError();
  });


  test('with valid username and valid password', async ({ launchPage }) => {
    const validateLoginPage = new LoginPage(launchPage);
    await validateLoginPage.login(login.validUser.username, login.validUser.password);
    await validateLoginPage.verifySuccessfulLogin();
  });
});

