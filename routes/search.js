const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();
const { requireAuth } = require('../auth');
const { Profile, Video, Avatar, Sequelize } = require('../db/models')
const op = Sequelize.Op;


router.get('/search', requireAuth, asyncHandler(async (req, res) => {
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
            [op.like]: `%Family%`
          },
          isMovie: true,
        },
        limit: 25,
      });

    res.render("searchTab", { videos, profiles, profile1 });
    }));

module.exports = router;
  