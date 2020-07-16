const db = require('./db/models');

const loginAccount = (req, res, account) => {
    req.session.auth = {
        accountId: account.id,
    };
};

const restoreAccount = async (req, res, next) => {
    console.log(req.session);

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
    restoreAccount,
};