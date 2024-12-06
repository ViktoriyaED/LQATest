import SideMenuComponent from "../components/SideMenuComponent";

export default class HomePage {

    constructor(page) {
        this.page = page;
        this.sideMenu = new SideMenuComponent(this.page);

        this.h1Header = this.page.getByRole('heading', {name: 'Home'});
    }
}