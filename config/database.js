const { username, password, database, host } = require("./index").db;

module.exports = {
    development: {
        username,
        password,
        database,
        host,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          }
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
    },
};
