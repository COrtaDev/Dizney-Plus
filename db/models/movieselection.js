'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieSelection = sequelize.define('MovieSelection', {
    selection: DataTypes.STRING
  }, {});
  MovieSelection.associate = function(models) {
    // associations can be defined here
  };
  return MovieSelection;
};