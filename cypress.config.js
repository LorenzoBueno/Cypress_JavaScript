const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});