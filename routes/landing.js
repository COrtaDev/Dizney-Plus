const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    res.render("landingPage");
  })
);

module.exports = router;
