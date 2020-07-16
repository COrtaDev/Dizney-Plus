'use strict';
module.exports = (sequelize, DataTypes) => {
  const SeriesSelection = sequelize.define('SeriesSelection', {
    selection: DataTypes.STRING
  }, { timestamps: false });
  
  SeriesSelection.associate = function(models) {
    const columnMapping = {
      through: 'MovieSelectionGroups',
      foreignKey: 'seriesSelectionId',
      otherKey: 'videoId'
    }
    SeriesSelection.belongsToMany(models.Video, columnMapping);
   };
  return SeriesSelection;
};