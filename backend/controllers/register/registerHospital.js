const mongoose = require("mongoose");
const user = require('../../models/Hospital');
module.exports =  (req, res) =>{

    user.create({
        ...req.body
    });

    console.log(req.body);

}