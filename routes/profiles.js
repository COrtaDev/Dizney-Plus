const express = require('express');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const db = require('../db/models');
const bcrypt = require('bcryptjs');
// const multer  = require('multer');//may be optional

const { check, validationResult } = require('express-validator')
const { csrfProtection, asyncHandler } = require('../utils');
const { access_id, secret } = require('../config');

const router = express.Router();
s3.listBuckets(function (err, data) { console.log(err, data); });


router.get('/profiles/select-avatar', (req, res) => {
  res.render('profiles-select-avatar')
})

router.get('/profiles/select-profile', (req, res) => {
  res.render('profiles-select-profile')
})

function retrieveFile(filename, res) {

  const getParams = {
    Bucket: 'sample-bucket-name',
    Key: filename
  };

  s3.getObject(getParams, function (err, data) {
    if (err) {
      return res.status(400).send({ success: false, err: err });
    }
    else {
      return res.send(data.Body);
    }
  });
}
