import {test} from '@playwright/test';

export default class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailInputField = this.page.locator('[type="email"]');
        this.passwordInputField = this.page.locator('[type="password"]');
        this.continueButton = this.page.getByRole('button', {name: 'Continue', exact: true});
        this.logInButton = this.page.getByRole('button', {name: 'Log in'});
        this.cookieBanner = this.page.getByRole('alertdialog');
        this.closeCookieBannerButton = this.cookieBanner.getByRole('button', { name: 'Close' });
    }

    async fillEmailInputField(email) {
        await this.emailInputField.fill(email);
    }

    async clickContinueButton() {
        this.continueButton.click();
    }

    async fillPasswordInputField(password) {
        await this.passwordInputField.fill(password);
    }

    async clickLogInButton() {
        this.logInButton.click();
    }

    async clickCloseCookieBannerButton() {
        await this.closeCookieBannerButton.waitFor();
        await this.closeCookieBannerButton.click();
    }
}