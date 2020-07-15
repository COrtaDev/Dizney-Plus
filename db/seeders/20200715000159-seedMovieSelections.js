'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('MovieSelections', [
        { selection: 'FEATURED'},
        { selection: 'ALL MOVIES A-Z' },
        { selection: 'ACTION/ADVENTURE' },
        { selection: 'ANIMATION' },
        { selection: 'COMEDY' },
        { selection: 'DOCUMENTARY' },
        { selection: 'DRAMA' },
        { selection: 'KIDS' },
        { selection: 'SHORTS' },
        { selection: 'ULTRA HD AND HDR' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieSelections', null, {});
  }
};
