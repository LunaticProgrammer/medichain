const mongoose = require("mongoose");
const user = require('../../models/Distributor');
exports.module = (req, res) => {

    user.create({
        ...req.body
    });

    console.log(req.body);

}