const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
const LoginPage = require('../pageObjects/LoginPage');

const loginPage = new LoginPage();

Given('I open the Omningage application', () => {
  loginPage.visit();
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url;
    });
  });
});

And('I click on the login button', () => {
  loginPage.clickLoginButton();
});

When(/^I log in to Okta with username "([^"]*)" and password "([^"]*)"$/, (username, password) => {
  loginPage.loginOkta(username, password);
});

Then('I should be logged in and see "{string}" on the dashboard', (expectedText) => {
  loginPage.verifyOmningageDashboard();
  cy.get('.custom-space').should('contain.text', expectedText);
});
