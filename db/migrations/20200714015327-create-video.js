'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      rating: {
        allowNull: false,
        type: Sequelize.STRING
      },
      year: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isOriginal: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      isMovie: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      runtime: {
        allowNull: false,
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      starring: {
        type: Sequelize.TEXT
      },
      seasons: {
        type: Sequelize.INTEGER
      },
      genres: {
        allowNull: false,
        type: Sequelize.STRING
      },
      details: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      videoUrl: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      titleImg: {
        allowNull: false,
        type: Sequelize.STRING
      },
      backgroundImg: {
        allowNull: false,
        type: Sequelize.STRING
      },
      buttonImg: {
        allowNull: false,
        type: Sequelize.STRING
      },
      // brandId: {
      //   // allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: { model: 'Brands' }
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Videos');
  }
};