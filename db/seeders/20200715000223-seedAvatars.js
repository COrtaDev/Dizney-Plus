'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Avatars', [
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
      { avatarImg: '***URL***' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Avatars', null, {});
  }
};
