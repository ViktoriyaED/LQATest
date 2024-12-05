export default class SideMenuComponent {

    constructor(page) {
        this.page = page;
        this.crossFunctionalProjectPlan = this.page.getByText('Cross-functional project plan, Project');
    }

    async clickCrossFunctionalProjectPlan() {
        this.crossFunctionalProjectPlan.click();
    }
}