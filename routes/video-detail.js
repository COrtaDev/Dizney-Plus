const express = require('express');
const { asyncHandler } = require('../utils');
// const { requireAuth } = require('../auth');
const { Video } = require('../db/models');

const router = express.Router();

router.get(
  '/video/:title',
//   requireAuth,
  asyncHandler(async (req, res) => {
    const videoTitle = req.params.title;
    const video = await Video.findOne({ where: { title: videoTitle } });
    res.render('video-detail', { video });
  })
);

router.get(
  '/video/:title/player',
//   requireAuth,
  asyncHandler(async (req, res) => {
    const videoTitle = req.params.title;
    const video = await Video.findOne({ where: { title: videoTitle } });
    const videoUrl = video.videoUrl;
    res.render('video-player', { videoUrl });
  })
);

module.exports = router;
