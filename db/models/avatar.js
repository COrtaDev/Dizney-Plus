'use strict';
module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define('Avatar', {
    avatarImg: DataTypes.STRING,
  }, { timestamps: false });
  
  Avatar.associate = function(models) { };
  return Avatar;
};