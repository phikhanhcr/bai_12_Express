var express = require("express");
var router = express.Router();
var checkLogin = require("../validation/checkLogin")
var controler = require('../controler/loginControler')
router.get('/login' , controler.login);

router.post('/login',checkLogin.checkLogin , controler.postLogin);
module.exports = router;