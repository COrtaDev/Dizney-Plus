'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isKid: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      accountId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Accounts' }
      },
      avatarId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Avatars' }
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
    return queryInterface.dropTable('Profiles');
  }
};