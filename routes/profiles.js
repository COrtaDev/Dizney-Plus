const express = require('express');
const { check, validationResult } = require('express-validator')
const { Avatar, Profile } = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const { requireAuth } = require('../auth');
const router = express.Router();


//Who's Watching???
router.get('/profiles/select-profile', requireAuth, asyncHandler(async (req, res) => {
  let id = req.session.auth.accountId
  const profiles = await Profile.findAll({
    where: { accountId: id },
    include: [{
      model: Avatar,
    }],
    limit: 7
  })
  res.render('profiles-select-profile', { profiles, Avatar })
}))

router.get('/profiles/select-avatar', requireAuth, asyncHandler(async (req, res) => {
  const avatars = await Avatar.findAll({
    limit: 50
  })
  res.render('profiles-select-avatar', { avatars })
}))

router.get('/profiles/add', requireAuth, asyncHandler(async (req, res) => {
  let id = req
  console.log(id);
  res.render('profiles-add-profile', { Profile, Avatar })
  res.send(event.target)
}))

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
