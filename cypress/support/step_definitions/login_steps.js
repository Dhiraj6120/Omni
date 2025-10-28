const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
const LoginPage = require('../pages/LoginPage');
const OmniHomePage = require('../pages/OmniHomePage');
const { overrideWindowOpen } = require('../utils/GenericUtils');
const loginPage = new LoginPage();
const omnihomepage = new OmniHomePage()

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

Then('I should be logged in and see Omningage on the dashboard', () => {
  omnihomepage.verifyOmningageDashboard();
});
