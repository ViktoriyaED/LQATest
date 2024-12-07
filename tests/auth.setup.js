import { test as setup, expect } from '@playwright/test';
import path from 'path';
import {CREDENTIALS} from "../testData";

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {

    // await page.goto('/');
    // await loginPage.clickCloseCookieBannerButton();
    // await loginPage.fillEmailInputField(CREDENTIALS.email);
    // await loginPage.clickContinueButton();
    // await loginPage.fillPasswordInputField(CREDENTIALS.password);
    // await loginPage.clickLogInButton();
    // await homePage.h1Header.waitFor();

    await page.goto('https://app.asana.com/-/login');
    await page.getByRole('alertdialog').getByRole('button', {name: 'Close'}).waitFor();
    await page.getByRole('alertdialog').getByRole('button', {name: 'Close'}).click();
    await page.locator('[type="email"]').fill(CREDENTIALS.email);
    await page.getByRole('button', {name: 'Continue', exact: true}).click();
    await page.locator('[type="password"]').fill(CREDENTIALS.password);
    await page.getByRole('button', {name: 'Log in'}).click();
    await page.getByRole('heading', {name: 'Home'}).waitFor();

    await expect(page).toHaveTitle('Home - Asana');

    await page.context().storageState({ path: authFile });
});