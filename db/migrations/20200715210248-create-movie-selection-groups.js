'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MovieSelectionGroups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      videoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Videos' }
      },
      movieSelectionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'MovieSelections' }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MovieSelectionGroups');
  }
};