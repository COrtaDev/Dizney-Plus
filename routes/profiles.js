const express = require('express');
const { check, validationResult } = require('express-validator')
const { Avatar, Profile, Sequelize } = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const { requireAuth } = require('../auth');
const router = express.Router();
const fetch = require('node-fetch');
const op = Sequelize.Op;



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
  let id = req.session.auth.accountId
  const avatars = await Avatar.findAll({})

  res.render('profiles-select-avatar', { avatars, Profile })
}))

router.get('/profiles/add/:id', requireAuth, asyncHandler(async (req, res) => {
  res.render('profiles-add-profile', { Avatar, Profile })
}))

router.post('/profiles/add/:id', requireAuth,
  asyncHandler(async (req, res) => {
    const id = req.session.auth.accountId
    const avatarId = parseInt(req.params.id);
    console.log(req.params)
    let {
      name,
      isKid,
    } = req.body;
    if (!isKid) isKid = false;
    if (isKid = 'on') isKid = true;
    // profile.name = name;
    // profile.isKid = isKid;
    // profile.avatarId = avatarId;
    const profile = await Profile.create({
      name: name,
      isKid: isKid,
      accountId: id,
      avatarId: avatarId
    });

    // const profiles = await Profile.findAll({
    //   where: { accountId: id },
    //   include: [{
    //     model: Avatar,
    //   }],
    //   limit: 7
    // })
    res.redirect('/profiles/select-profile')
  }))



//Edit profiles: Select a profile to edit
//Will display all available profiles associated to your account
router.get('/profiles/edit-profile', requireAuth, asyncHandler(async (req, res) => {
  let id = req.session.auth.accountId
  const profiles = await Profile.findAll({
    where: { accountId: id },
    include: [{
      model: Avatar,
    }],
    limit: 7
  })
  res.render('profiles-edit', { profiles, Avatar })
}))

//This is the page where you change the name of the profile and set it to kids mode if you want
router.get('/profiles/edit/:id', requireAuth, asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  const profile = await Profile.findByPk(id, { include: Avatar });
  res.render('profile-edit-profile', { profile, Avatar })
}))


//this updates a selected profile on the current account
router.put('/profiles/edit/:id', requireAuth, asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  let profile = await Profile.findByPk(id);
  let {
    name,
    isKid,
  } = req.body;
  let avatarId = parseInt(req.body.avatarId, 10);
  if (!isKid) profile.isKid = false;
  if (isKid = 'on') profile.isKid = true;
  profile.name = name;
  profile.isKid = isKid;
  profile.avatarId = avatarId;
  await profile.save();
  res.status(204).end();
}))

router.post('/profiles/delete/:id', requireAuth, asyncHandler(async (req, res) => {
  const id = req.session.auth.accountId
  const profileId = parseInt(req.params.id);
  const profile = await Profile.findByPk(profileId)
  await profile.destroy();
  // let id = req.session.auth.accountId
  const profiles = await Profile.findAll({
    where: { accountId: id },
    include: [{
      model: Avatar,
    }],
    limit: 7
  })
  res.redirect('/profiles/select-profile')

}))



module.exports = router;
