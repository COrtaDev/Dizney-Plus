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
        type: Sequelize.STRING,
        unique: true
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rating: {
        allowNull: false,
        type: Sequelize.STRING
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      isOriginal: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      isMovie: {
        allowNull: false,
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
        allowNull: false,
        type: Sequelize.STRING
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
        type: Sequelize.STRING
      },
      videoUrl: {
        allowNull: false,
        type: Sequelize.STRING
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
      brandId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Brands' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Videos');
  }
};