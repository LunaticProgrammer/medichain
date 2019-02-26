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

export function registerRawMat(req, res){

    rawMat.create({
        ...req.body
    });

    console.log(req.body);

}
export function registerRawMatStock(req, res){

    rawMatStock.create({
        ...req.body
    });

}

export function registerDist(req, res){

    dist.create({
        ...req.body
    });

}
export function registerFinStock(req, res){

    finStockMan.create({
        ...req.body
    });

}

export function registerHospital(req, res){

    hospital.create({
        ...req.body
    });

}
export function registerManufacturer(req, res){

    manufacturer.create({
        ...req.body
    });

}

export function registerPharma(req, res){

    pharma.create({
        ...req.body
    });

}

export function registerSubDist(req, res){

    subDist.create({
        ...req.body
    });

}

export function registerTransporters(req, res){

    transporters.create({
        ...req.body
    });

}