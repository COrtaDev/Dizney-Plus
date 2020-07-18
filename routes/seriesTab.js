const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();
const { Video, Sequelize } = require('../db/models')
const op = Sequelize.Op;


router.get('/series/:genres', asyncHandler(async (req, res) => {
  let selectedGenre = req.params.genres
  const videos = await Video.findAll({
    where: {
      genres: {
        [op.like]: `%${selectedGenre}%`
      },
      isMovie: null,
    },
    limit: 50,
  });
  res.render("seriesTab", { videos });
}));

router.get('/series', asyncHandler(async (req, res) => {
    const videos = await Video.findAll({
      where: {
        isMovie: null,
      },
      limit: 50,
    });
    res.render("seriesTab", {videos});
}));

module.exports = router;