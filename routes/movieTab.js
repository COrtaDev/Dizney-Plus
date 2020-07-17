const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();
const { Video, Sequelize } = require('../db/models')
const op = Sequelize.Op;


router.get('/movies/:genres', asyncHandler(async (req, res) => {
  let selectedGenre = req.params.genres
  const videos = await Video.findAll({
    where: {
      genres: {
        [op.like]: `%${selectedGenre}%`
      },
      isMovie: true,
    },
    limit: 50,
  });
  res.render("movieTab", { videos });
}));

router.get('/movies', asyncHandler(async (req, res) => {
    const videos = await Video.findAll({
      where: {
        isMovie: true,
      },
      limit: 50,
    });
    res.render("movieTab", {videos});
}));

module.exports = router;
