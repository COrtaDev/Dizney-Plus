const express = require('express');
const { asyncHandler } = require("../utils");
const router = express.Router();
const { Videos} = require('../db/models')
router.get('/movies', asyncHandler(async (req, res) => {
    const videos = Videos.findAll();
    res.render("movieTab", {videos});
  })
);

router.get('/movies/:genre', asyncHandler(async (req, res) => {
    console.log(req.params.genre)

}))
module.exports = router;