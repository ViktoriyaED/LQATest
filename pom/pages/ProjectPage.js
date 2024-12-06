import SideMenuComponent from "../components/SideMenuComponent";

export default class ProjectPage {

    constructor(page) {
        this.page = page;
        this.sideMenu = new SideMenuComponent(this.page);

        this.columnByName = (columnName) =>
            this.page
                .locator('.CommentOnlyBoardBody-column')
                .filter({has: this.page.getByRole('heading', {name: columnName})});

        this.cardsByColumnByName = (columnName, cardName) =>
            this.columnByName(columnName)
                .locator('.CommentOnlyBoardColumnCardsContainer-itemContainer')
                .filter({
                    has: this.page.locator(`.BoardCard-taskName:has-text("${cardName}")`)
                });

        this.tagListByCard = (columnName, cardName) =>
            this.cardsByColumnByName(columnName, cardName)
                .locator('.BoardCardCustomPropertiesAndTags span');
    }
}