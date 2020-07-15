const express = require('express');
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');



const router = express.Router();

router.get('/account/sign-up', csrfProtection, (req, res) => {
    const account = db.Account.build();
    res.render('account-sign-up', {
        title: 'Sign up',
        account,
        csrfToken: req.csrfToken(),
    });
});

const accountValidators = [
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Please enter a value for Email")
        // .isLength({ max: 255 })
        // .withMessage('Email must not be more than 255 characters long'),
        .isEmail()
        .withMessage("Email is not valid")
        .custom((value) => {
            return db.Account.findOne({ where: { email: value } }).then((account) => {
                if (account) {
                    return Promise.reject("The Email is already in use");
                }
            });
    }),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please enter a value for Password")
        // .isLength({ max: 50 })
        // .withMessage("Password must not be more than 50 characters long")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
        .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
];

router.post('/account/sign-up', csrfProtection, accountValidators,
    asyncHandler(async (req, res) => {
        const {
            email,
            password,
        } = req.body;

        const account = db.Account.build({
            email
        });

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            const passwordDigest = await bcrypt.hash(password, 10);
            account.passwordDigest = passwordDigest;
            await account.save();
            // loginAccount(req, res, login);
            res.redirect('/');
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render('account-sign-up', {
                title: 'Sign up',
                account,
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    })
);

module.exports = router;