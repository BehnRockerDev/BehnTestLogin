import {ChainablePromiseElement} from "webdriverio";

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    //Getters for the page elements
    public get Sidenav(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#mainSidenav');
    }
    public get SidenavHomeLink(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#homeSidenavLink');
    }
    public get SidenavLoginLink(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#loginSidenavLink');
    }
    public get Toolbar(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#mainToolbar');
    }
    public get ToolbarHamburgerButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#sidenavHamburger');
    }
    public get ToolbarHomeLink(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#homeToolbarLink');
    }
    public get ToolbarLoginLink(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#loginToolbarLink');
    }

    //Opens a sub-page of the page
    public open(path: string): Promise<string> {
        return browser.url(`http://localhost:4200/${path}`)
    }
}
