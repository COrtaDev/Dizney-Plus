const express = require('express');
const { asyncHandler } = require('../utils');
const { requireAuth } = require('../auth');
const { Profile, Avatar, Video, Sequelize } = require('../db/models');
const op = Sequelize.Op;
const router = express.Router();
const app = express();
app.use(express.urlencoded({ extended: true }));
const { check, validationResult } = require('express-validator')

router.get(
  '/video/:title',
  requireAuth,
  asyncHandler(async (req, res) => {

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

    const videoTitle = req.params.title;
    const video = await Video.findOne({ where: { title: videoTitle } });

    const selectedGenre = video.genres
    const videos = await Video.findAll({
      where: {
        genres: {
          [op.like]: `%${selectedGenre}%`,
        },
        title: {
          [op.not]: videoTitle,
        }
      },
      limit: 10,
    });

    res.render('video-detail', { video, videos, profiles, profile1 });
  })
);

// const titleString = asyncHandler(async (req, res) => { 
//   await Video.findOne({ where: { title: videoTitle } });
// });
// console.log(titleString)
// const stringInfo = [
//   check('title')
//     .matches(titleString.title)
//     .withMessage('You suck at life'),
// ]
// console.log(stringInfo)
router.post(
  '/video/search',
  requireAuth,
  asyncHandler(async (req, res) => {

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
    const videoTitle = req.body.title;
    const video = await Video.findOne({ where: { title: videoTitle } });
    if(!video) {
      const videos = await Video.findAll();
      res.render("searchTab", { videos, profile1, profiles });
    } else {
      res.render('video-detail', { video, profiles, profile1 });
    }
  })
);

router.get(
  '/video/:title/player',
  requireAuth,
  asyncHandler(async (req, res) => {

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
    
    const videoTitle = req.params.title;
    const video = await Video.findOne({ where: { title: videoTitle } });
    res.render('video-player', { video, profiles, profile1 });
  })
);

module.exports = router;
