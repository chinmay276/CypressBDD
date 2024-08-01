const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
async function setupNodeEvents(on, config) {

  await addCucumberPreprocessorPlugin(on, config);
  await allureWriter(on, config);
  on("file:preprocessor", preprocessor(config));
  on('before:run', async (details) => {
    console.log('override before:run');
    await beforeRunHook(details);
  });

  on('after:run', async () => {
    console.log('override after:run');
    await afterRunHook();
  });

  return config;


}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    reporter: 'cypress-mochawesome-reporter',



    baseUrl: "https://magento.softwaretestingboard.com/",
    screenshotOnRunFailure: true,
    video: true,
    trashAssetsBeforeRuns: true,
    specPattern: "./cypress/e2e/Features/*.feature",
    env:
    {
      allureReuseAfterSpec: true
    },
    pageLoadTimeout:900000,
    defaultCommandTimeout:25000,
    retries:{
      openMode:2,
      runMode:2
    },

  },
});
