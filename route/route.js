var checkValue = require("../validation/checkValue");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var db = require("../db.js")
var controler = require('../controler/controler')

router.get('/' ,  controler.home);

router.get('/search' , controler.search)

router.get('/create' , controler.get)

router.post('/create' , checkValue.checkValue , controler.post)

// router.get('/login' , (req , res, next) => {
//   var name = req.query.name;
//   var pass = req.query.pass;
//   res.cookie(name , pass);
//   console.log(res.locals);
//   //next();
//   console.log("ahhi");
//   res.render('login.pug')
// })

module.exports = router;