'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.STRING,
    year: DataTypes.INTEGER,
    isOriginal: DataTypes.BOOLEAN,
    isMovie: DataTypes.BOOLEAN,
    runtime: DataTypes.STRING,
    director: DataTypes.STRING,
    starring: DataTypes.STRING,
    seasons: DataTypes.INTEGER,
    genres: DataTypes.STRING,
    details: DataTypes.STRING,
    videoUrl: DataTypes.STRING,
    titleImg: DataTypes.STRING,
    backgroundImg: DataTypes.STRING,
    buttonImg: DataTypes.STRING,
    brandId: DataTypes.INTEGER
  }, {
      indexes: [
        {
          unique: false,
          fields: ['title']
        }
      ]
  });
  Video.associate = function(models) {
    Video.belongsTo(models.Brand, { foreignKey: 'brandId' });
    Video.hasMany(models.Brand, { foreignKey: 'videoId' });
  };
  return Video;
};