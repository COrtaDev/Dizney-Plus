'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Avatars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      avatarImg: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Avatars');
  }
};