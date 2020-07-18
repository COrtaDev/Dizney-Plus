'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieSelection = sequelize.define('MovieSelection', {
    selection: DataTypes.STRING
  }, { timestamps: false });

  MovieSelection.associate = function(models) {
    // const columnMapping = {
    //   through: 'MovieSelectionGroups',
    //   foreignKey: 'movieSelectionId',
    //   otherKey: 'videoId'
    // }
    // MovieSelection.belongsToMany(models.Video, columnMapping);
  };
  return MovieSelection;
};