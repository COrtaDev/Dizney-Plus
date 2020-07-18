'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SeriesSelectionGroups', {
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
      seriesSelectionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'SeriesSelections' }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SeriesSelectionGroups');
  }
};