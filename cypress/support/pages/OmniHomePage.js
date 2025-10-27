const { overrideWindowOpen } = require('../utils');


class OmniHomePage {

  clickLogoutButton() {
    cy.get('#omni_logout_button', { timeout: 10000 }).click();
  }

  confirmLogout() {
    cy.get('#omni_logout_agent_logout_btn', { timeout: 10000 }).click();
  }

  cancelLogout() {
    cy.get('#omni_logout_agent_logout_btn', { timeout: 10000 }).contains('Cancel').click();
  }

  verifyOmningageDashboard() {
    cy.wait(10000);
    cy.visit('/#/home/supervisor');
    overrideWindowOpen()
    cy.get('#omni_dashboard_login_btn', { timeout: 10000 }).click();
    cy.document().should('exist');
    cy.get('.custom-space', { timeout: 30000 })
      .invoke('text')
      .then(text => {
        expect(text.toLowerCase()).to.include('omni');
      });
  }
}

module.exports = OmniHomePage;
