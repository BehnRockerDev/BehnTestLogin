import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

//Sub-class of the base Page class
class NotFoundPage extends Page {
    public get messageArea(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#errorMessage');
    }

    //Goes directly to the page. Uses the parent class open() method
    public open(): Promise<string> {
        return super.open('pagethatdoesnotexist');
    }
}

export default new NotFoundPage();