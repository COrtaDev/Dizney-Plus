'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('WatchListedVideos', [
      { profileId: 1, videoId: 1, createdAt: new Date(), updatedAt: new Date() },
      { profileId: 1, videoId: 2, createdAt: new Date(), updatedAt: new Date() },
      { profileId: 2, videoId: 1, createdAt: new Date(), updatedAt: new Date() },
      { profileId: 2, videoId: 10, createdAt: new Date(), updatedAt: new Date() },
      { profileId: 2, videoId: 1, createdAt: new Date(), updatedAt: new Date() },
      { profileId: 3, videoId: 8, createdAt: new Date(), updatedAt: new Date() },
      { profileId: 3, videoId: 1, createdAt: new Date(), updatedAt: new Date() },
      { profileId: 4, videoId: 5, createdAt: new Date(), updatedAt: new Date() },
      { profileId: 4, videoId: 1, createdAt: new Date(), updatedAt: new Date() },
      { profileId: 4, videoId: 3, createdAt: new Date(), updatedAt: new Date() },
      { profileId: 4, videoId: 8, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('WatchListedVideos', null, {});
  }
};
