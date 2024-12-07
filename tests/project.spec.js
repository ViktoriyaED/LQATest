import {expect} from '@playwright/test';
import {test} from '../fixtures.js';
import {CREDENTIALS, TEST_CASES} from "../testData";

// test.beforeEach(async ({page, loginPage, homePage}) => {
//     await page.goto('/');
//     await loginPage.clickCloseCookieBannerButton();
//     await loginPage.fillEmailInputField(CREDENTIALS.email);
//     await loginPage.clickContinueButton();
//     await loginPage.fillPasswordInputField(CREDENTIALS.password);
//     await loginPage.clickLogInButton();
//     await homePage.h1Header.waitFor();
// });

test.describe('TestCases', () => {
    Object.values(TEST_CASES).forEach(({ projectName, columnName, cardName, tags }) => {
        test(`Verify card "${cardName}" in column "${columnName}"`, async ({ page, homePage, projectPage }) => {
            await homePage.sideMenu.clickSideMenuOption(projectName);
            const card = await projectPage.cardsByColumnByName(columnName, cardName);

            await expect(card).toBeVisible();

            const tagList = await projectPage.tagListByCard(columnName, cardName);
            await expect(tagList).toHaveText(tags);
        });
    });
});