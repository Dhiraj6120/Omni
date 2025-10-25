describe('Login to Omni Application', () => {
  it('Verify User is able to login to application', () => {
    cy.get('.custom-space', {timeout: 10000}).should('contain.text', 'Omningage')
  })
})
