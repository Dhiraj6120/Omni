const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default;

let authCookie = null

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sit.omningage-vmo2.cloud',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    viewportWidth: 1366,
    viewportHeight: 768,
    specPattern: '**/*.feature',

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber({
        nonGlobalStepDefinitions: true,
        stepDefinitions: 'cypress/support/step_definitions/**/*.js'
      }));
      on('task', {
        saveCookie(cookie) {
          authCookie = cookie
          return null
        },
        getCookie() {
          return authCookie
        },
      })

      return config
    }
  }
})
