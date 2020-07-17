'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Accounts', [
        { email: 'demo1@demo.com', passwordDigest: await bcrypt.hash('demo-password1', 10) },
        { email: 'demo2@demo.com', passwordDigest: await bcrypt.hash('demo-password2', 10) },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Accounts', null, {});
  }
};
