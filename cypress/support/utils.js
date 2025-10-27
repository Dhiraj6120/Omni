function overrideWindowOpen(shouldRedirect = false) {
  cy.window().then(win => {
    cy.stub(win, 'open').callsFake(url => {
      if (shouldRedirect && url) {
        win.location.href = url; // open in same tab
      }
    });
  });
}

module.exports = { overrideWindowOpen };