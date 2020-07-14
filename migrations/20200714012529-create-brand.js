'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Brands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brandName: {
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
    return queryInterface.dropTable('Brands');
  }
};