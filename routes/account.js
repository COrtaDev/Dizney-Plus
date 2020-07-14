const express = require("express");
const { check, validationResult } = require("express-validator");

const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");

const router = express.Router();

// router.get('/account/register', csrfProtection, (req, res) => {
//   const user = db.Account.build();
//   res.render('user-register', {
//     title: 'Register',
//     user,
//     csrfToken: req.csrfToken(),
//   });
// });
