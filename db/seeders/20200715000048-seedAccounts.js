'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Accounts', [
        { email: 'demo@demo.com', passwordDigest: bcrypt.hash('demo-password', 10), sessionToken: '***' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Accounts', null, {});
  }
};
