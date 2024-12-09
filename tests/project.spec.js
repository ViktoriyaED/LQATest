import {expect} from '@playwright/test';
import {test} from '../fixtures.js';
import {TEST_CASES} from "../testData";

test.beforeEach(async ({page}) => {
    await page.goto('/');
});

test.describe('TestCases', () => {
    Object.values(TEST_CASES).forEach(({ projectName, columnName, cardName, tags }) => {
        test(`Verify card "${cardName}" in column "${columnName}"`, async ({ homePage, projectPage }) => {
            await homePage.sideMenu.clickSideMenuOption(projectName);
            const card = await projectPage.cardsByColumnByName(columnName, cardName);

            await expect(card).toBeVisible();

            const tagList = await projectPage.tagListByCard(columnName, cardName);
            await expect(tagList).toHaveText(tags);
        });
    });
});