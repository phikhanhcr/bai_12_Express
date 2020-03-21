var db = require("../db.js")
var checkLogin = require("../validation/checkLogin")
module.exports.login = (req, res, next) => {
  res.render('login.pug');
} 
module.exports.postLogin = (req , res, next) => {
  res.redirect('/home');
}