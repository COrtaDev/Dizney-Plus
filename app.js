const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { environment, sessionSecret } = require("./config");
const landingRouter = require('./routes/landing');
const moviesRouter = require('./routes/movieTab');
const seriesRouter = require('./routes/seriesTab');
const searchRouter = require('./routes/search');
const originalsRouter = require('./routes/originals');
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
app.use(bodyParser());
app.use(session({
    name: 'dizney-plus.sid',
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(restoreAccount);
app.use(accountRouter);
app.use(homeRouter);
app.use(profilesRouter);
app.use(landingRouter)
app.use(moviesRouter)
app.use(seriesRouter)
app.use(originalsRouter)
app.use(searchRouter)
// app.use(whosWatching)
app.use(videoDetailRouter);


app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.status = 404;
    next(err);
  });


app.use((err, req, res, next) => {
    res.status(err.status || 500);
    const isProduction = environment === "production";
    res.json({
      title: err.title || "Server Error",
      message: err.message,
      errers: err.errors,
      stack: isProduction ? null : err.stack,
    });
  });
module.exports = app;
