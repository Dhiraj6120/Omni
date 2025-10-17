const { defineConfig } = require('cypress')

let authCookie = null

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sit.omningage-vmo2.cloud',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    viewportWidth: 1366,
    viewportHeight: 768,

    setupNodeEvents(on, config) {
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
