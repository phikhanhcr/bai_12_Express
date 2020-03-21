var express = require('express');
const app = express();
const pug = require('pug');
const port = 3000;
var bodyParser = require("body-parser");
var router = require("./route/route")
var routerLogin = require("./route/login.route")
var requireMiddelware = require('./middleware/middleware');
const cookieParser = require('cookie-parser');


app.set('view engine', 'pug')
app.set('views', './views');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}))
app.get('/' , (req , res) => {
    res.render('home.pug');
})

app.use('/home' , requireMiddelware.requireLogin , router )
app.use('/auth' , routerLogin);

app.listen(port , () => {
    console.log('Server listening on port' + port );
})