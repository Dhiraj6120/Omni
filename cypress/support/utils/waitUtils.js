// Wait for a fixed duration
function waitFor(milliseconds = 10000) {
    cy.wait(milliseconds);
  }
  
  // Get element with default timeout
  function getWithTimeout(selector, timeout = 10000) {
    return cy.get(selector, { timeout });
  }
  
  // Get element and assert it contains text
  function getTextAndAssert(selector, expectedText, timeout = 40000) {
    cy.get(selector, { timeout })
      .invoke('text')
      .then(text => {
        expect(text.toLowerCase()).to.include(expectedText.toLowerCase());
      });
  }
  
  module.exports = {
    waitFor,
    getWithTimeout,
    getTextAndAssert,
  };
  