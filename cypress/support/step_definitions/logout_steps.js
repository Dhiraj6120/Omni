const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
const LoginPage = require('../pages/LoginPage');
const OmniHomePage = require('../pages/OmniHomePage');
const { overrideWindowOpen } = require('../utils/GenericUtils');
const loginPage = new LoginPage();
const omniHomePage = new OmniHomePage();

Given('I open the Omningage application', () => {
  loginPage.visit();
  overrideWindowOpen(true);
});

And('I click on the login button', () => {
  loginPage.clickLoginButton();
});

When(/^I log in to Okta with username "([^"]*)" and password "([^"]*)"$/, (username, password) => {
  loginPage.loginOkta(username, password);
});

Then(/^I should be logged in and see Omningage on the dashboard$/, () => {
  omniHomePage.verifyOmningageDashboard();
});

When('I tap on the logout button', () => {
  omniHomePage.clickLogoutButton();
});

And('I confirm the logout', () => {
  omniHomePage.confirmLogout();
});

Then('I should be redirected to the login page', () => {
  loginPage.verifyLoginPage();
});

And('I tap on the cancel button', () => {
  omniHomePage.cancelLogout();
});

Then('I should remain on the Omningage Dashboard', () => {
  omniHomePage.verifyOmniTextOnDashboard();
});
