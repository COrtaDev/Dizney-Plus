'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SeriesSelectionGroups', [
      { videoId: 8, seriesSelectionId: 3 },
      { videoId: 9, seriesSelectionId: 4 },
      { videoId: 10, seriesSelectionId: 5 },
      { videoId: 11, seriesSelectionId: 6 },
      { videoId: 12, seriesSelectionId: 5 },
      { videoId: 8, seriesSelectionId: 4 },
      { videoId: 9, seriesSelectionId: 3 },
      { videoId: 10, seriesSelectionId: 6 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SeriesSelectionGroups', null, {});
  }
};
