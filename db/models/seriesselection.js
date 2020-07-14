'use strict';
module.exports = (sequelize, DataTypes) => {
  const SeriesSelection = sequelize.define('SeriesSelection', {
    selection: DataTypes.STRING
  }, {});
  SeriesSelection.associate = function(models) {
    // associations can be defined here
  };
  return SeriesSelection;
};