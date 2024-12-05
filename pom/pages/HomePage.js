import SideMenuComponent from "../components/SideMenuComponent";

export default class HomePage {

    constructor(page) {
        this.page = page;
        this.sideMenu = new SideMenuComponent(this.page);
        this.toDoColumn = this.page.locator('.CommentOnlyBoardBody-column').filter({has: page.getByRole('heading', {name: 'To do'}) });
        this.toDoColumnCardList = this.toDoColumn.locator('.CommentOnlyBoardColumnCardsContainer-itemContainer');
        this.h1Header = this.page.getByRole('heading', {name: 'Home'});

    }

    async waitForHomePageLoaded() {
        await this.h1Header.waitFor();
    }
}