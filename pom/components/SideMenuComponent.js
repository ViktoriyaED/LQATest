export default class SideMenuComponent {

    constructor(page) {
        this.page = page;

        this.sideMenuOption = (option) => this.page.getByText(option);
    }

    async clickSideMenuOption(option) {
        this.sideMenuOption(option).click();
    }
}