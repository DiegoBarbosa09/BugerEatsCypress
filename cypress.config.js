const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'https://buger-eats-qa.vercel.app/'
  },
  
  reporter: 'mochawesome',
    reporterOptions: {
      reporterDir: 'cypress/report/mochawesome-report',
      overwrite: true,
      html: true,
      json: false,
      timestamp: 'mmddyyyy+HHMMss'
    }    
  })  



