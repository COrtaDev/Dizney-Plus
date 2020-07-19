const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();
const { requireAuth } = require('../auth');
const { Profile, Video, Sequelize } = require('../db/models')
const op = Sequelize.Op;


router.get('/series/:genres', requireAuth, asyncHandler(async (req, res) => {
  let selectedGenre = req.params.genres
  const profiles = await Profile.findAll({
    where: {
      accountId: req.session.auth.accountId
    }
  });
  const profile1 = profiles.shift();
  const videos = await Video.findAll({
    where: {
      genres: {
        [op.like]: `%${selectedGenre}%`
      },
      isMovie: null,
    },
    limit: 50,
  });
  res.render("seriesTab", { videos, profiles, profile1 });
}));

router.get('/series', requireAuth,asyncHandler(async (req, res) => {
  const profiles = await Profile.findAll({
    where: {
      accountId: req.session.auth.accountId
    }
  });
  const profile1 = profiles.shift();
    const videos = await Video.findAll({
      where: {
        isMovie: null,
      },
      limit: 50,
    });
    res.render("seriesTab", {videos, profiles, profile1});
}));

module.exports = router;