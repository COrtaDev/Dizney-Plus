const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { requireAuth } = require('../auth');
const { Profile } = require('../db/models');
const { Video } = require('../db/models');

router.get("/home",
  requireAuth,
  asyncHandler(async (req, res) => {
  const profiles = await Profile.findAll({
    where: {
      accountId: req.session.auth.accountId
    }
  });
  const videos = await Video.findAll({ });
  res.render("home", { profiles });
}));

module.exports = router;