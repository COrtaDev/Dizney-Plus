'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Videos', [
      { profileId: 1, videoId: 1 },
      { profileId: 1, videoId: 2 },
      { profileId: 2, videoId: 1 },
      { profileId: 2, videoId: 10 },
      { profileId: 2, videoId: 1 },
      { profileId: 3, videoId: 19 },
      { profileId: 3, videoId: 1 },
      { profileId: 4, videoId: 5 },
      { profileId: 4, videoId: 1 },
      { profileId: 4, videoId: 3 },
      { profileId: 4, videoId: 8 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Videos', null, {});
  }
};
