import {expect} from '@playwright/test';
import {test} from '../fixtures.js';
import {CREDENTIALS} from "../testData";

test.beforeEach(async ({page, loginPage, homePage}) => {
    await page.goto('/');
    await loginPage.clickCloseCookieBannerButton();
    await loginPage.fillEmailInputField(CREDENTIALS.email);
    await loginPage.clickContinueButton();
    await loginPage.fillPasswordInputField(CREDENTIALS.password);
    await loginPage.clickLogInButton();
    await homePage.waitForHomePageLoaded();
});

test.describe('Login', () => {
    test('test', async ({page, homePage}) => {
        await homePage.sideMenu.clickCrossFunctionalProjectPlan();
        await expect(homePage.toDoColumn).toBeVisible({timeout: 10000});

        expect(await homePage.toDoColumn.locator('.BoardCard-taskName')).toContainText(["Draft project brief"]);




























        // await expect(homePage.toDoColumnCardList.filter({has: page.locator('span[class="BoardCardLayout-title"]'), {name: 'Draft project brief'}})).toHaveText('Draft project brief');
        // await expect(page.locator('.BoardCardLayout-title')).toContainText('Draft project brief');


        // const matchingCard = await homePage.toDoColumnCardList.locator('span[class="BoardCardLayout-title"] span').filter({
        //     hasText: 'Draft project brief',
        // });
        //
        // if (await matchingCard.count() > 0) {
        //     console.log('Карточка с именем "Draft project brief" найдена.');
        // } else {
        //     console.log('Карточка с именем "Draft project brief" не найдена.');
        // }

        // let isCardFound = false;
        //
        // const cardList = await homePage.toDoColumnCardList.locator('span[class="BoardCardLayout-title"] span');
        //
        // for (let i = 0; i < await cardList.count(); i++) {
        //     const text = await cardList.nth(i).textContent();
        //     console.log(text);
        //     if (text && text.includes('Draft project brief')) {
        //         isCardFound = true;
        //         break;
        //     }
        // }


    });
});