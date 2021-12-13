import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

//Sub-class of the base Page class.
class loginPage extends Page {
    //Getters for the page elements
    public get PasswordTextField(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#password');
    }
    public get ResetButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#reset');
    }
    public get SubmitButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#submit');
    }
    public get UsernameTextField(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#username');
    }
}