const { defineConfig } = require("cypress");

const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config) //aqui está usando o cypress split
      // IMPORTANT: return the config object
      return config
    },
  },
});
