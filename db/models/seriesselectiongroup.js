'use strict';
module.exports = (sequelize, DataTypes) => {
  const SeriesSelectionGroup = sequelize.define('SeriesSelectionGroup', {
    videoId: DataTypes.INTEGER,
    videoSelectionId: DataTypes.INTEGER
  }, { timestamps: false });
  
  SeriesSelectionGroup.associate = function(models) { };
  return SeriesSelectionGroup;
};