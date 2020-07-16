'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SeriesSelections', [
      { selection: 'FEATURED' },
      { selection: 'ALL SERIES A-Z' },
      { selection: 'ACTION/ADVENTURE' },
      { selection: 'ANIMATION' },
      { selection: 'COMEDY' },
      { selection: 'DOCUSERIES' },
      { selection: 'KIDS' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SeriesSelections', null, {});
  }
};
