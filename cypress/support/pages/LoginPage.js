const { overrideWindowOpen } = require('../utils/GenericUtils');
const { waitFor, getWithTimeout, getTextAndAssert } = require('../utils/waitUtils');
const { BASE_URL, OKTA_URL, OKTA_SSO_PATH } = require('../constants/urls');

class LoginPage {
  visit() {
    cy.visit(BASE_URL);
  }

  clickLoginButton() {
    getWithTimeout('#omni_dashboard_login_btn').click()
  }

  
loginOkta(username, password) {
  cy.origin(
    OKTA_URL,
    { args: { username, password, oktaPath: OKTA_SSO_PATH } },
    ({ username, password, oktaPath }) => {
      cy.visit(oktaPath);
      cy.get('#identifier', { timeout: 10000 }).type(username);
      cy.get('button[data-se="save"]').click();
      cy.get('input[data-se="credentials.passcode"]').type(password);
      cy.get('button[data-se="save"]').click();
      cy.get('#oktaVerifyPush_1-description').click();
    }
  );
}

  verifyLoginPage() {
    cy.url().should('include', BASE_URL);
    getWithTimeout('#omni_dashboard_login_btn').should('be.visible');
  }
}

module.exports = LoginPage;
