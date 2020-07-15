'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Profiles', [
        { name: 'Mom', isKid: false, accountId: 1, avatarId: 1 },
        { name: 'Dad', isKid: false, accountId: 1, avatarId: 2 },
        { name: 'Chris', isKid: true, accountId: 1, avatarId: 3 },
        { name: 'Michelle', isKid: false, accountId: 1, avatarId: 4 }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Profiles', null, {});
  }
};
