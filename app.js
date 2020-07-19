const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { environment, sessionSecret } = require("./config");
const landingRouter = require('./routes/landing');
const moviesRouter = require('./routes/movieTab');
const seriesRouter = require('./routes/seriesTab');
const accountRouter = require('./routes/account');
const profilesRouter = require('./routes/profiles');
const homeRouter = require('./routes/home');
const videoDetailRouter = require('./routes/video-detail');
const { restoreAccount } = require('./auth');
const app = express();
app.use(express.static('public'))
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
app.use(restoreAccount);
app.use(accountRouter);
app.use(homeRouter);
app.use(profilesRouter);
app.use(landingRouter);
app.use(moviesRouter);
app.use(seriesRouter);




app.use(videoDetailRouter);
module.exports = app;
