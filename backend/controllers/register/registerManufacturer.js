const mongoose = require("mongoose");
const user = require('../../models/Manufacturer');
module.exports =  (req, res) => {

    user.create({
        ...req.body
    });

    console.log(req.body);

}