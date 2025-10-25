// cypress/support/commands.js

Cypress.Commands.add('loginOmningage', () => {
    cy.visit('/#/')

    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      });
    });
    cy.get('#omni_dashboard_login_btn', { timeout: 10000 }).click()

    cy.origin('https://virginmediao2.oktapreview.com', () => {
      cy.visit('/app/amazon_aws/exk5do4cjfiOd1ppu0x7/sso/saml')
      cy.get('#identifier', { timeout: 10000 }).type('dhiraj.gawali@oktapreview.virginmediao2.co.uk')
      cy.get('button[data-se="save"]').click()
      cy.get('input[data-se="credentials.passcode"]').type('Dhiali976736$')
      cy.get('button[data-se="save"]').click()
      cy.get('#oktaVerifyPush_1-description').click()
    })  

    cy.visit('/#/home/supervisor')
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake(() => {
      });
    });
    cy.get('#omni_dashboard_login_btn', { timeout: 10000 }).click()
    cy.wait(15000)
    cy.document().should('exist');
})
