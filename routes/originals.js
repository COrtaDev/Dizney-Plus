const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();
const { Profile, Avatar, Video, Sequelize } = require('../db/models')
const { requireAuth } = require("../auth");
const op = Sequelize.Op;

router.get('/originals', requireAuth, asyncHandler(async (req, res) => {
  const profile1 = await Profile.findOne({
    where: {
      id: req.session.auth.whosWatching
    },
    include: Avatar
  });

  const profiles = await Profile.findAll({
    where: {
      [op.and]: [
        { [op.not]: { id: req.session.auth.whosWatching } },
        { accountId: req.session.auth.accountId }
      ]
    },
    include: Avatar
  });  
  
  const featuredVideos = await Video.findAll({
    where: {
      isOriginal: true,
    },
    limit: 15,
  });
  const seriesVideos = await Video.findAll({
    where: {
      isOriginal: true,
    },
    limit: 15,
  });
  const moviesVideos = await Video.findAll({
    where: {
      isOriginal: true,
    },
    limit: 15,
  });
  res.render("originals", {featuredVideos, seriesVideos, moviesVideos, profiles, profile1 });
}));

module.exports = router;