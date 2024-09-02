const { defineConfig } = require("cypress");
const { configurePlugin } = require("cypress-mongodb");

module.exports = defineConfig({
  env:{
    mongodb: {
      uri: 'mongodb+srv://dba:study123@booksapi.8dskh.mongodb.net/?retryWrites=true&w=majority&appName=booksAPI',
      database: 'test',
      collection: 'books'
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configurePlugin(on);
    },
  },
});
