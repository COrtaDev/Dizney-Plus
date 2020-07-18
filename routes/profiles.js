const express = require('express');
const { check, validationResult } = require('express-validator')
const { Avatar } = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
// const multer  = require('multer');//may be optional
const { access_id, secret, bucket } = require('../config');
const router = express.Router();


//Who's Watching???
router.get('/profiles/select-profile', asyncHandler(async (req, res) => {
  const avatars = await Avatar.findAll({
    limit: 20
  })
  res.render('profiles-select-profile', { avatars })
}))

router.get('/profiles/select-avatar', asyncHandler(async (req, res) => {
  const avatars = await Avatar.findAll({
    limit: 20
  })
  res.render('profiles-select-avatar', { avatars })
}))

router.get('/profiles/add', (req, res) => {
  res.render('profiles-add-profile', { avatars })
})

router.post('/profiles/add:id', (req, res) => {
  res.redirect('profiles-select-profile')
})


//Edit profiles: Select a profile to edit
//Will display all available profiles associated to your account
router.get('/profiles/edit', (req, res) => {
  res.render('profiles-edit')
})

//This is the page where you change the name of the profile and set it to kids mode if you want
router.get('/profiles/edit:id', (req, res) => {
  res.render('profiles-edit')
})

router.patch('/profiles/edit:id', (req, res) => {
  res.render('profiles-edit')
})

router.delete('/profiles/edit:id', (req, res) => {
  res.render('profiles-edit-profile')
})



module.exports = router;
