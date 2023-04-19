module.exports = {
  defaultCommandTimeout: 6000,
  env: {
    url: "https://api.zippopotam.us",
  },
  retries: {
    runMode: 0,
  },
  projectId: 'fgkrft',
  e2e: {
    baseUrl: 'https://api.zippopotam.us',
    logLevel: 'trace',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
    },
    specPattern : "cypress/integration/*.js"

  },
};
