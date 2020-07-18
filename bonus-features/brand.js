'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    brandName: DataTypes.STRING,
    titleImg: DataTypes.STRING,
    backgroundImg: DataTypes.STRING,
    buttonImg: DataTypes.STRING
  }, { timestamps: false });
  Brand.associate = function(models) {
    Brand.hasMany(models.Video, { foreignKey: 'brandId' });
  };
  return Brand;
};