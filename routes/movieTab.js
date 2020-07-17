const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();
const { Video } = require('../db/models')

router.get('/movies', asyncHandler(async (req, res) => {
    const videos = await Video.findAll({
      where: {
        isMovie: true,
      },
      limit: 50,
    });
    res.render("movieTab", {videos});
}));

router.get('/movies/:genres', asyncHandler(async (req, res) => {
  let selectedGenre = req.params.genre
  const selectedVideos = await Video.findAll({
    where: {
      genres: `${selectedGenre}`
    },
    limit: 50,
  });
  res.render("movieTab", { selectedVideos });
}));

module.exports = router;
