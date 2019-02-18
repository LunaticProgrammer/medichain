const rawMat = require('../models/rawMatCollector');
const mongoose = require("mongoose");

module.exports = (req, res) => {

    rawMat.create({
        ...req.body
    });

    console.log(req.body);

}