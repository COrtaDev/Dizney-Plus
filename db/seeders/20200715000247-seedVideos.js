'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Videos', null, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Videos', null, {});
  }
};
