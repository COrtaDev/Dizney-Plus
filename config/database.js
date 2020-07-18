const { username, password, database, host } = require("./index").db;

module.exports = {
    development: {
        username,
        password,
        database,
        host,
        dialect: "postgres",
    },
    production: {
        use_env_variable: 'DATABASE_URL',
    },
};
