var express = require('express');
var router = express.Router();
var loginController = require('./controllers/loginController');
var registerController = require('./controllers/registerController');

/* GET home page. */
router.post('/login/rawmat', loginController.loginRawMatCollector);
router.post('/register/rawmat', registerController.registerRawMat);


module.exports = router;
