const { overrideWindowOpen } = require('../utils/GenericUtils');

class LoginPage {
  visit() {
    cy.visit('/#/');
  }

  clickLoginButton() {
    cy.get('#omni_dashboard_login_btn', { timeout: 10000 }).click();
  }

  loginOkta(username, password) {
    cy.origin('https://virginmediao2.oktapreview.com', { args: { username, password } }, ({ username, password }) => {
      cy.visit('/app/amazon_aws/exk5do4cjfiOd1ppu0x7/sso/saml');
      cy.get('#identifier', { timeout: 10000 }).type(username);
      cy.get('button[data-se="save"]').click();
      cy.get('input[data-se="credentials.passcode"]').type(password);
      cy.get('button[data-se="save"]').click();
      // The next step might need adjustment based on the actual MFA flow
      cy.get('#oktaVerifyPush_1-description').click();
      // cy.get('#oktaVerifyPush_0-label').click();
    });
  }

  verifyLoginPage() {
    cy.url().should('include', '/#/');
    cy.get('#omni_dashboard_login_btn', { timeout: 10000 }).should('be.visible');
  }
}

module.exports = LoginPage;
