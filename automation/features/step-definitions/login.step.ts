import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';
import LoginPage from '../pageobjects/login.page';
import NotFoundPage from '../pageobjects/notFound.page';

const pages = {
    home: HomePage,
    login: LoginPage,
    notFound: NotFoundPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/I login with correct credentials/, async () => {
    await LoginPage.login("testuser", "password123");
});

When(/I login with incorrect credentials/, async () => {
    await LoginPage.login("baduser", "badpassword");
});

When(/I click the reset button/, async () => {
    await LoginPage.reset();
});

When(/I navigate to the login page via the toolbar/, async () => {
    await LoginPage.navigateToLoginPageWithToolbar();
});

When(/I navigate to the login page via the sidebar/, async () => {
    await LoginPage.navigateToLoginPageWithSidenav();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

When(/I open the home page/, async () => {
    await HomePage.navigateToHomePageWithToolbar();
});

When(/I open a page that doesn't exist/, async () => {
    await NotFoundPage.open();
});

Then(/I am redirected to the home page/, async () => {
    await expect(HomePage.messageArea).toBeDisplayed();
});

Then(/I see a confirmation message/, async () => {
    await expect(HomePage.signedInMessage).toHaveTextContaining("You are logged in! Welcome");
});

Then(/I see an authentication error message/, async () => {
    await expect(LoginPage.messageAreaIsDisplayed()).toBeTruthy();
    await expect(LoginPage.messageArea).toHaveTextContaining("Incorrect username and/or password")
});

Then(/The form is reset to default/, async () => {
    await expect(LoginPage.formFieldsAreClear).toBeTruthy();
});

Then(/The authentication error message disappears/, async () => {
    await expect(LoginPage.messageAreaIsNotDisplayed).toBeTruthy();
});

Then(/^I should see a message saying (.*)$/, async (message) => {
    await expect(HomePage.messageArea).toBeDisplayed();
    if (await HomePage.signedInMessage.isDisplayed()) {
        await expect(HomePage.signedInMessage).toHaveTextContaining(message);
    } else {
        await expect(HomePage.signedOutMessage).toHaveTextContaining(message);
    }

});

Then(/I should be shown an error message/, async () => {
    await expect(NotFoundPage.messageArea).toBeDisplayed();
    await expect(NotFoundPage.messageArea).toHaveTextContaining("Page not found");
});