const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { requireAuth } = require('../auth');
const { Profile, Video, Avatar, Sequelize } = require('../db/models');
const op = Sequelize.Op;
// const { logoutAccount } = require('../auth');

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
  }));

module.exports = router;
