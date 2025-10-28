const { overrideWindowOpen } = require('../utils/GenericUtils');
const { waitFor, getWithTimeout, getTextAndAssert } = require('../utils/waitUtils');

class OmniHomePage {
  clickLogoutButton() {
    getWithTimeout('#omni_logout_button').click();
  }

  confirmLogout() {
    getWithTimeout('#omni_logout_agent_logout_btn').click();
  }

  cancelLogout() {
    getWithTimeout('#omni_logout_agent_canncel_btn').click();
  }

  verifyOmningageDashboard() {
    waitFor();
    cy.visit('/#/home/agent');
    overrideWindowOpen();
    getWithTimeout('#omni_dashboard_login_btn').click();
    cy.document().should('exist');
    this.verifyOmniTextOnDashboard();
  }

  verifyOmniTextOnDashboard() {
    getTextAndAssert('.custom-space', 'omni');
  }
}

module.exports = OmniHomePage;
