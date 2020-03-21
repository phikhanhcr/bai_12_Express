var db = require("../db");
module.exports.checkLogin = (req, res, next) => {
  var user = req.body.name;
  var pass = req.body.pass;
  var account = db.get('list').find({user : user}).value();
  if(!account) {
    res.render('login' , {
      "errors" : ['Account doesn"t exsit!'], 
      "values" : req.body
    })
  }
  if(pass !== account.password) {
    res.render('login' , {
      "errors" : ["Wrong password! Please try again !"],
      "values" : req.body
    })
  }
  res.cookie('userPass' , account.password);
  next();
}