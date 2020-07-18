const express = require('express');
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const { loginAccount, logoutAccount } = require('../auth');


const router = express.Router();

router.get('/account/sign-up', csrfProtection, (req, res) => {
    const account = db.Account.build();
    res.render('account-sign-up', {
        title: 'Sign up',
        account,
        csrfToken: req.csrfToken(),
    });
});

const signupValidators = [
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

router.post('/account/sign-up', csrfProtection, signupValidators,
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
            loginAccount(req, res, account);
            res.redirect('/home');
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

router.get('/account/login', csrfProtection, (req, res) => {
    res.render('account-login', {
        title: 'Login',
        csrfToken: req.csrfToken(),
    });
});

const loginValidators = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please enter a value for Email'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please enter a value for Password'),
];

router.post('/account/login', csrfProtection, loginValidators,
    asyncHandler(async (req, res) => {
        const {
            email,
            password,
        } = req.body;

        let errors = [];
        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            const account = await db.Account.findOne({ where: { email }});

            if (account !== null) {
                const passwordMatch = await bcrypt.compare(password, account.passwordDigest.toString());

                if (passwordMatch) {
                    loginAccount(req, res, account);
                    return res.redirect('/home');
                }
            }

            errors.push('Incorrect login credentials.');
        } else {
            errors = validatorErrors.array().map((error) => error.msg);
        }

        res.render('account-login', {
            title: 'Login',
            email,
            errors,
            csrfToken: req.csrfToken(),
        })
    })
);

router.post('/account/demologin', asyncHandler(async (req, res) => {
    const account = await db.Account.findOne({ where: { email:'demo1@demo.com' }});
    loginAccount(req, res, account);             
   return res.redirect('/home');
                
}));

router.post('/account/logout', (req, res) => {
    logoutAccount(req, res);
    res.redirect('/');
});

module.exports = router;
