const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();
const { Profile, Avatar, Video } = require('../db/models')
const { requireAuth } = require("../auth");

router.get('/originals', requireAuth, asyncHandler(async (req, res) => {
  const profile1 = await Profile.findOne({
    where: {
      id: req.session.auth.whosWatching
    },
    include: Avatar
  });

  const profiles = await Profile.findAll({
    where: {
      accountId: req.session.auth.accountId
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