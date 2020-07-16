'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MovieSelectionGroups', [
      { videoId: 2, movieSelectionId: 3 },
      { videoId: 3, movieSelectionId: 3 },
      { videoId: 4, movieSelectionId: 4 },
      { videoId: 5, movieSelectionId: 5 },
      { videoId: 6, movieSelectionId: 6 },
      { videoId: 7, movieSelectionId: 3 },
      { videoId: 2, movieSelectionId: 4 },
      { videoId: 1, movieSelectionId: 5 },
      { videoId: 1, movieSelectionId: 4 },
      { videoId: 1, movieSelectionId: 7 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieSelectionGroups', null, {});
  }
};
