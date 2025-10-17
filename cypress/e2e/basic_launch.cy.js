describe('Login to Omni Application', () => {
  it('Verify User is able to login to application', () => {
    cy.get('.custom-space').should('contain.text', 'Omningage')
  })
})
