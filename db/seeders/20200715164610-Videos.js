'use strict';
let data = require('.../bin/script-testing.js');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const [data] = await sequelize.query(
    //   `INSERT INTO Videos
    //   (title, description, rating, year, isOriginal, isMovie, runtime, director, starring, seasons, genres, details, videoUrl, titleImg, backgroundImg, buttonImg, brandId)
    //   VALUES
    //   (data.Title, data.Plot, data.Rating, data.Year, isOriginal, isMovie, data)`
    //   )
    //   ;
    // // data will contain the number of affected rows.
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
