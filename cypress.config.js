const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.fundix.pro",
    video: false,
    screenshotOnRunFailure: true,
  },
});
