const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
const LoginPage = require('../pageObjects/LoginPage');
const { overrideWindowOpen } = require('../utils');
const loginPage = new LoginPage();

Given('I open the Omningage application', () => {
  loginPage.visit();
  overrideWindowOpen();
});

And('I click on the login button', () => {
  loginPage.clickLoginButton();
});

When(/^I log in to Okta with username "([^"]*)" and password "([^"]*)"$/, (username, password) => {
  loginPage.loginOkta(username, password);
});

Then(/^I should be logged in and see Omningage on the dashboard$/, () => {
  loginPage.verifyOmningageDashboard();
});

