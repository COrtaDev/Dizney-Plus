const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { environment } = require("./config");



const app = express();

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));






app.get('/', (req, res) => {
    res.send('Hello from Dizney+ Team!')
})





module.exports = app;