const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "68v4iv",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },
});
