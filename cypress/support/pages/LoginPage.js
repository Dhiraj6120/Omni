const { overrideWindowOpen } = require('../utils/GenericUtils');
const { waitFor, getWithTimeout, getTextAndAssert } = require('../utils/waitUtils');

class LoginPage {
  visit() {
    cy.visit('/#/');
  }

  clickLoginButton() {
    getWithTimeout('#omni_dashboard_login_btn').click()
  }

  loginOkta(username, password) {
    cy.origin('https://virginmediao2.oktapreview.com', { args: { username, password } }, ({ username, password }) => {
      cy.visit('/app/amazon_aws/exk5do4cjfiOd1ppu0x7/sso/saml');
      cy.get('#identifier', { timeout: 10000 }).type(username);
      cy.get('button[data-se="save"]').click();
      cy.get('input[data-se="credentials.passcode"]').type(password);
      cy.get('button[data-se="save"]').click();
      cy.get('#oktaVerifyPush_1-description').click();
    });
  }

  verifyLoginPage() {
    cy.url().should('include', '/#/');
    getWithTimeout('#omni_dashboard_login_btn').should('be.visible');
  }
}

module.exports = LoginPage;
