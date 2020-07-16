const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    res.render("movieTab");
  })
);

module.exports = router;