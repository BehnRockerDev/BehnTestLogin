import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

//Sub-class of the base Page class
class LoginPage extends Page {
    //Getters for the page elements
    public get messageArea(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#messageArea');
    }
    public get passwordTextField(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#password');
    }
    public get resetButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#reset');
    }
    public get submitButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#submit');
    }
    public get usernameTextField(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#username');
    }

    public async fillOutFormFields(username: string, password: string): Promise<void> {
        await this.usernameTextField.setValue(username);
        await this.passwordTextField.setValue(password);
    }

    public async formFieldsAreClear(): Promise<boolean> {
        await expect(this.usernameTextField.getValue()).toMatch("");
        await expect(this.passwordTextField.getValue()).toMatch("");
        return true;
    }

    //Method which handles getting the page elements, filling them out, and then clicking Submit
    public async login(username: string, password: string): Promise<void> {
        await this.fillOutFormFields(username, password)
        await this.submitButton.click();
    }

    public async messageAreaIsDisplayed(): Promise<boolean> {
        expect(this.messageArea).toBeDisplayed();
        return true;
    }

    public async messageAreaIsNotDisplayed(): Promise<boolean> {
        !expect(this.messageArea).toBeDisplayed();
        return true;
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
        return super.open('login');
    }

    public async reset(): Promise<void> {
        await this.resetButton.click();
    }
}

export default new LoginPage();