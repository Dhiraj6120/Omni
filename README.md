# Cypress basic framework

This repository contains a minimal Cypress setup and one example E2E test that launches the Omni web app.

Files added:
- `cypress.config.js` - Cypress configuration (baseUrl set to the SIT URL)
- `cypress/e2e/basic_launch.cy.js` - Test that visits the app root
- `cypress/support/e2e.js` - Support hooks (empty placeholder)

How to run (PowerShell on Windows):

1. Install dependencies

```powershell
npm ci
```

2. Verify Cypress installation

```powershell
npm run cypress:verify
```

3. Open Cypress interactive runner

```powershell
npm run cypress:open
```

4. Run tests headless (cloud environment may block Chromedriver; try interactive if needed)

```powershell
npm run cypress:run
```

Notes and assumptions:
- The test visits `https://sit.omningage-vmo2.cloud/#/` via the configured `baseUrl`.
- If your environment blocks external access (VPN/Firewall), ensure the URL is reachable from the machine running tests.
- You can extend tests by adding commands in `cypress/support` and tests under `cypress/e2e`.

Local run result (example):

- Cypress 15.4.0 ran 1 spec (basic_launch.cy.js)
- 1 test passed, 0 failed
- Duration: ~4s

If you want any additional checks (login flow, visual checks, CI wiring), tell me what to add next.
