const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();
const { Video } = require('../db/models')


router.get('/originals', asyncHandler(async (req, res) => {
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
    res.render("originals", {featuredVideos, seriesVideos, moviesVideos});
}));

module.exports = router;