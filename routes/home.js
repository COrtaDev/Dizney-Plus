const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { requireAuth } = require('../auth');
const { Profile, Video, Avatar, Sequelize } = require('../db/models');
const op = Sequelize.Op;


router.get("/home/:id", 
  requireAuth,
  asyncHandler(async (req, res) => {
    const url = req.originalUrl
    const idx = url.lastIndexOf("/");
    const newId = parseInt(url.substring(idx + 1));

    req.session.auth = {
      accountId: req.session.auth.accountId,
      whosWatching: newId
    };

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

    res.render("home", { profiles, profile1 });
  })
);


router.get("/home", requireAuth, 
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

  res.render("home", { profiles, profile1 });
  })
);

module.exports = router;
