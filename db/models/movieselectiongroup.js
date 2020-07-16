'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieSelectionGroup = sequelize.define('MovieSelectionGroup', {
    videoId: DataTypes.INTEGER,
    movieSelectionId: DataTypes.INTEGER
  }, { timestamps: false });

  MovieSelectionGroup.associate = function(models) { };
  return MovieSelectionGroup;
};