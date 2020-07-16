'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SeriesSelectionGroups', [
      { videoId: 3, seriesSelectionId: 2 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SeriesSelectionGroups', null, {});
  }
};
