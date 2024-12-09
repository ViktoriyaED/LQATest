import { expect } from '@playwright/test';
import path from 'path';
import {test as setup} from '../fixtures.js';
import {CREDENTIALS} from "../testData";

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page, loginPage, homePage }) => {

    await page.goto('/');
    await loginPage.clickCloseCookieBannerButton();
    await loginPage.fillEmailInputField(CREDENTIALS.email);
    await loginPage.clickContinueButton();
    await loginPage.fillPasswordInputField(CREDENTIALS.password);
    await loginPage.clickLogInButton();
    await homePage.h1Header.waitFor();
    await expect(page).toHaveTitle('Home - Asana');

    await page.context().storageState({ path: authFile });
});