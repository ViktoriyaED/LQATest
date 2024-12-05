import { test as base } from '@playwright/test';
import HomePage from './pom/pages/HomePage';
import LoginPage from './pom/pages/LoginPage';
// import SideMenuComponent from './pom/components/SideMenuComponent';

export const test = base.extend({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    // sideMenu: async ({ page }, use) => {
    //     await use(new SideMenuComponent(page));
    // },
});