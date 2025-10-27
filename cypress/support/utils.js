
function overrideWindowOpen() {
    cy.window().then(win => {
      cy.stub(win, 'open').callsFake(url => {
        win.location.href = url;
      });
    });
  }
  
  module.exports = { overrideWindowOpen };
  