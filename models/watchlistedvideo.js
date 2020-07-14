'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchListedVideo = sequelize.define('WatchListedVideo', {
    profileId: DataTypes.INTEGER,
    videoId: DataTypes.INTEGER
  }, {});
  WatchListedVideo.associate = function(models) {
    WatchListedVideo.belongsTo(models.Profile, { foreignKey: 'profileId' });
    WatchListedVideo.belongsTo(models.Video, { foreignKey: 'videoId' });
  };
  return WatchListedVideo;
};