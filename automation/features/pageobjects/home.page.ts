import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

//Sub-class of the base Page class
class HomePage extends Page {
    public get messageArea(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#userLoggedInMessage');
    }

    public async navigateToLoginPageWithToolbar(): Promise<void> {
        await this.ToolbarLoginLink.click();
    }

    public async navigateToLoginPageWithSidenav(): Promise<void> {
        await this.ToolbarHamburgerButton.click();
        await this.ToolbarLoginLink.click();
    }

    //Goes directly to the page. Uses the parent class open() method
    public open(): Promise<string> {
        return super.open('home');
    }
}

export default new HomePage();
