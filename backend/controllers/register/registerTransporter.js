const mongoose = require("mongoose");
const user = require('../../models/transporters');
module.exports =  (req, res) => {

    user.create({
        ...req.body
    });

    console.log(req.body);

}