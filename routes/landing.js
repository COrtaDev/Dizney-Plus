const express = require('express');
const { asyncHandler } = require("../app");
const router = express.Router();
// const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/', asyncHandler(async (req, res) => {
    res.render("landingPage");
  })
);
// router.get('/', (req, res) => {
//   res.render("landingPage")
// })
module.exports = router;
