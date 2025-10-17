import './commands'

// This file is processed and loaded automatically before your test files.
// You can put global configuration and behavior that modifies Cypress here.

// Example: custom command to log in could go here later.
// Cypress.Commands.add('login', (user) => { ... })

// Import commands.js using ES2015 syntax:
// import './commands'

// Alternatively you can use CommonJS require:
// require('./commands')

// Keep this file intentionally small for now.

before(() => {
  // runs once before all tests
})

beforeEach(() => {
  cy.loginOmningage()
})
