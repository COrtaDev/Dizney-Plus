const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { requireAuth } = require('../auth');
const { Profile, Video, Avatar, Sequelize } = require('../db/models');
const Op = Sequelize.Op;
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
        [Op.and]: [
          { [Op.not]: { id: req.session.auth.whosWatching } },
          { accountId: req.session.auth.accountId }
        ]
      },
      include: Avatar
    });

    const videos = await Video.findAll({
      where: {
        isMovie: true,
      },
      limit: 10,
    });

    const mainVideos = await Video.findAll({
      where: {
        id: {
          [Op.between]: [25, 100]
        },
      },
    });

  res.render("home", { mainVideos, videos, profiles, profile1 });
}));

module.exports = router;
