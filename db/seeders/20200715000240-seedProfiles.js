'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Profiles', [
        { name: 'Mom', isKid: false, accountId: 1, avatarId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Dad', isKid: false, accountId: 1, avatarId: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Chris', isKid: true, accountId: 1, avatarId: 3, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Michelle', isKid: false, accountId: 1, avatarId: 4, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Profiles', null, {});
  }
};
