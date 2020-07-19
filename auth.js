const db = require('./db/models');

const loginAccount = (req, res, account) => {
    req.session.auth = {
        accountId: account.id,
        whosWatching: 1
    };
};

const whosWatching = (req, res, profile) => {
    req.session.auth = {
        whosWatching: profile.id,
    };
};

const logoutAccount = (req, res) => {
    delete req.session.auth;
};

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/');
    }
    return next();
};

const restoreAccount = async (req, res, next) => {

    if (req.session.auth) {
        const { accountId } = req.session.auth;

        try {
            const account = await db.Account.findByPk(accountId);

            if (account) {
                res.locals.authenticated = true;
                res.locals.account = account;
                next();
            }
        } catch (err) {
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
};

module.exports = {
    loginAccount,
    logoutAccount,
    requireAuth,
    restoreAccount,
    whosWatching
};
