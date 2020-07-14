const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require('morgan');

// const pathRouter = require('./routes/path');

const { check, validationResult } = require("express-validator");
const csrf = require("csurf");

const app = express();
const port = process.env.PORT || 3000;

const csrfProtection = csrf({ cookie: true });

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// app.use('/path', pathRouter);

app.set("view engine", "pug");

app.get('/', (req, res) => {
    res.send('Hello from Dizney+ Team!')
})





module.exports = app;