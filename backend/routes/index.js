var express = require('express');
var router = express.Router();
var registerRawMat = require('../controllers/register/registerRawMatCollector');
var registerRawMatStocker = require('../controllers/register/registerRawMatStocker');
var registerDist = require('../controllers/register/registerDistributor');
var registerSubDist = require('../controllers/register/registerSubDistributor');
var registerHospital = require('../controllers/register/registerHospital');
var registerFinStock = require('../controllers/register/registerFinStockManager');
var registerTransporters = require('../controllers/register/registerTransporter');
var registerManufacturer = require('../controllers/register/registerManufacturer');
var registerPharma = require('../controllers/register/registerPharma');
var loginRawMatCollector = require('../controllers/login/loginRawMatCollector');
var loginRawMatStocker = require('../controllers/login/loginRawMatStocker');
var loginDistributor = require('../controllers/login/loginDistributor');
var loginSubDistributor = require('../controllers/login/loginSubDistributor');
var loginFinStockManager = require('../controllers/login/loginFinStockManager');
var loginHospital = require('../controllers/login/loginHospital');
var loginTransporter = require('../controllers/login/loginTransporter');
var loginManufacturer = require('../controllers/login/loginManufacturer');
var loginPharma = require('../controllers/login/loginPharma');

/* GET home page. */
router.post('/login/rawmat', loginRawMatCollector);
router.post('/register/rawmat', registerRawMat);
router.post('/register/rawmatstock', registerRawMatStocker);
router.post('/login/rawmatstock', loginRawMatStocker);
router.post('/register/distributor',registerDist);
router.post('/login/dist', loginDistributor);
router.post('/register/subdistributor', registerSubDist);
router.post('/login/subdistributor', loginSubDistributor);
router.post('/register/pharma', registerPharma);
router.post('/login/pharma', loginPharma);
router.post('/register/finstockman', registerFinStock);
router.post('/login/finstockman', loginFinStockManager);
router.post('/register/hospital', registerHospital);
router.post('/login/hospital', loginHospital);
router.post('/register/transporter', registerTransporters);
router.post('/login/transporter', loginTransporter);
router.post('/register/manufacturer', registerManufacturer);
router.post('/login/manufacturer', loginManufacturer);


















module.exports = router;
