'use strict';
module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define('Avatar', {
    name: DataTypes.STRING,
    avatarImg: DataTypes.STRING
  }, {});
  Avatar.associate = function(models) {
    Avatar.belongsTo(models.Profile, { foreignKey: 'avatarId' });
  };
  return Avatar;
};