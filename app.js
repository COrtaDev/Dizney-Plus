const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { environment } = require("./config");
const landing = require('./routes/landing');
const login = require('./routes/login');
const app = express();
app.set('view engine', 'pug');

// app.use(session({
//     secret: 'a5d63fc5-17a5-459c-b3ba-6d81792158fc',
//     resave: false,
//     saveUninitialized: false,
// }));

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


app.get('/', landing)
app.get('/login', login);
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     const account = await Account.findOne({ where: { email } })
//     const hashPassword = bCrypt.hash(password, 10)
//     if (account.passwordDigest === hashPassword){

//     } 
// });

module.exports = app;
