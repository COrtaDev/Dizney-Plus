'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: DataTypes.STRING,
    isKid: DataTypes.BOOLEAN,
    accountId: DataTypes.INTEGER,
    avatarId: DataTypes.INTEGER
  }, {});
  Profile.associate = function (models) {
    Profile.belongsTo(models.Account, { foreignKey: 'accountId' });
    Profile.belongsTo(models.Avatar, { foreignKey: 'avatarId' });
    // Profile.hasMany(models.WatchListedVideo, { foreignKey: 'profileId' });
  };
  return Profile;
};