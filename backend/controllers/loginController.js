const rawMat = require('../models/rawMatCollector');
const rawMatStock = require('../models/rawMatStocker');
const transporters = require('../models/transporters');
const dist = require('../models/Distributor');
const manufacturer = require('../models/Manufacturer');
const pharma = require('../models/Pharma');
const subDist = require('../models/subDistributor');
const finStockMan = require('../models/finStockManager');
const hospital = require('../models/Hospital');

const mongoose = require("mongoose");

export function loginRawMatCollector(req, res) {


    const { email, password } = req.body;
  // try to find the user
  rawMat.findOne({ email }, (error, user) => {
    if (user) {
          if(user.password === password){
            res.send('successful')
          }else {

            res.send(error);
          }
        }else{
          res.send(error);
}