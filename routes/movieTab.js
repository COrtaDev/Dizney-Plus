const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();

router.get('/movies', asyncHandler(async (req, res) => {
    res.render("movieTab");
  })
);

router.get('/movies/:genre', asyncHandler(async (req, res) => {
    console.log(req.params.genre)
}))
module.exports = router;