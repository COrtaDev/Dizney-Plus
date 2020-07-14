const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const csrf = require('csurf');
const { environment } = require("./config");
const app = express();
const csrfProtection = csrf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));







app.get('/', (req, res) => {
    res.send('Hello from Dizney+ Team!')
})





module.exports = app;