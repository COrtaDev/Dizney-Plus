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
    // raw: true,
    where: {
      accountId: req.session.auth.accountId
    }
  });
  const profile1 = profiles.shift();
  // const videos = await Video.findAll({ });
  console.log(profiles);
  res.render("home", { profiles, profile1 });
}));

module.exports = router;