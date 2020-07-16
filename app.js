const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { environment, sessionSecret } = require("./config");
const landingRouter = require('./routes/landing');
const moviesRouter = require('./routes/movieTab');
const accountRouter = require('./routes/account');

const app = express();
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(cookieParser(sessionSecret));
app.use(session({
    name: 'dizney-plus.sid',
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
}));
app.use(express.urlencoded({ extended: false }));

app.use(accountRouter);

app.use('/', landingRouter)
app.use('/movies', moviesRouter)
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     const account = await Account.findOne({ where: { email } })
//     const hashPassword = bCrypt.hash(password, 10)
//     if (account.passwordDigest === hashPassword){

//     }
// });



module.exports = app;
