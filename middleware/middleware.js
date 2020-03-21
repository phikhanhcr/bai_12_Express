var db = require('../db');
module.exports.requireLogin = (req , res , next) => {
  // console.log(req.cookies);
  if(!req.cookies.userPass) {
    res.redirect('/auth/login');
    return;
  }
  var user = db.get('list').find({password : req.cookies.userPass}).value();
  if(!user) {
    res.redirect('/auth/login');
    return;
  }

  next();
}