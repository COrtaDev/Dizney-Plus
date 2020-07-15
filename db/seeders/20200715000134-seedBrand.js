'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Brands', [
        { brandName: 'Disney', titleImg: '***URL***', backgroundImg: '***URL***', buttonImg: '***URL***' },
        { brandName: 'Pixar', titleImg: '***URL***', backgroundImg: '***URL***', buttonImg: '***URL***' },
        { brandName: 'Marvel', titleImg: '***URL***', backgroundImg: '***URL***', buttonImg: '***URL***' },
        { brandName: 'Star Wars', titleImg: '***URL***', backgroundImg: '***URL***', buttonImg: '***URL***' },
        { brandName: 'National Geographic', titleImg: '***URL***', backgroundImg: '***URL***', buttonImg: '***URL***' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Brands', null, {});
  }
};
