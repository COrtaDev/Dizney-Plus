'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Accounts', [
        { email: 'demo@demo.com', passwordDigest: await bcrypt.hash('demo-password', 10) },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Accounts', null, {});
  }
};
