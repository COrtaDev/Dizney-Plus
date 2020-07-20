const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();
const { requireAuth } = require('../auth');
const { Profile, Avatar, Video, Sequelize } = require('../db/models')
const op = Sequelize.Op;


router.get('/series/:genres', requireAuth, asyncHandler(async (req, res) => {
  let selectedGenre = req.params.genres
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
  const videos = await Video.findAll({
    where: {
      isMovie: null,
    },
    limit: 50,
  });
  res.render("seriesTab", {videos, profiles, profile1});
}));

module.exports = router;