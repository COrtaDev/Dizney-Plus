'use strict';
module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define('Avatar', {
    name: DataTypes.STRING,
    avatarImg: DataTypes.STRING
  }, {});
  Avatar.associate = function(models) {
    Avatar.hasMany(models.Profile, { foreignKey: 'avatarId' });
  };
  return Avatar;
};