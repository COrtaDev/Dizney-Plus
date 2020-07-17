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
    const video = await Video.findOne(videoTitle);
    res.render('video-detail', { video });
  })
);

// router.get(
//   '/video/:id(\\d+)/:videoUrl(\\)',
//   asyncHandler(async (req, res) => {
//     const videoId = parseInt(req.params.id, 10);
//     const videoUrl = req.params.videoUrl;
    
//   })
// );

module.exports = router;
