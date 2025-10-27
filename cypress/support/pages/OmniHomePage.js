const { overrideWindowOpen } = require('../utils');


class OmniHomePage {
  
    verifyOmningageDashboard() {
        cy.wait(10000);
        cy.visit('/#/home/supervisor');
        overrideWindowOpen()
        cy.get('#omni_dashboard_login_btn', { timeout: 10000 }).click();
        cy.document().should('exist');
        cy.get('.custom-space', { timeout: 20000 })
        .invoke('text')
        .then(text => {
          expect(text.toLowerCase()).to.include('omni');
        });
      }
  }
  
  module.exports = OmniHomePage;
  