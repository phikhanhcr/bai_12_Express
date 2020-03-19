var express = require('express');
const app = express();
const pug = require('pug');
const port = 3000;
var bodyParser = require("body-parser");
var router = require("./route/route")
app.set('view engine', 'pug')
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.get('/' , (req , res) => {
    res.render('home.pug');
})

app.use('/home' ,router )

app.listen(port , () => {
    console.log('Server listening on port' + port );
})