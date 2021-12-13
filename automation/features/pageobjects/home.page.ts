import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

//Sub-class of the base Page class
class HomePage extends Page {
    public get messageArea(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#userLoggedInMessage');
    }

    public get signedInMessage(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#signedInMessage');
    }

    public get signedOutMessage(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#signedOutMessage');
    }

    public async navigateToHomePageWithToolbar(): Promise<void> {
        await this.ToolbarHomeLink.click();
    }

    //Goes directly to the page. Uses the parent class open() method
    public open(): Promise<string> {
        return super.open('home');
    }
}

export default new HomePage();
