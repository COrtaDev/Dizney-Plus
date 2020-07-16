'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MovieSelectionGroups', [
      { videoId: 2, movieSelectionId: 1},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieSelectionGroups', null, {});
  }
};
