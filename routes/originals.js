const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();
const { Profile, Video } = require('../db/models')
const { requireAuth } = require("../auth");

router.get('/originals', requireAuth, asyncHandler(async (req, res) => {
    const profiles = await Profile.findAll({
      where: {
        accountId: req.session.auth.accountId,
      },
    });
    const profile1 = profiles.shift();
    const videos = await Video.findAll({
      where: {
        isOriginal: true,
      },
      limit: 50,
    });
    // const seriesVideos = await Video.findAll({
    //   where: {
    //     isMovie: null,
    //     isOriginal: true,
    //   },
    //   limit: 15,
    // });
    // const moviesVideos = await Video.findAll({
    //   where: {
    //     isMovie: true,
    //     isOriginal: true,
    //   },
    //   limit: 15,
    // });
    res.render("originals", {videos, profiles, profile1 });
}));

module.exports = router;