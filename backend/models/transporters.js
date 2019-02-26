const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const tranporterSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    pnum : {
        type : Number,
        required : true,
        unique : true
    },

    email : {

        type : String,
        required : true,
        unique : true
    },
    
    password : {

        type : String,
        required : true,
        unique : true
    },
    address : {

        type : String,
        required : true,
    }
})

tranporterSchema.pre('save',function(next){
    
    const user = this

    bcrypt.hash(user.password , 10 , function(error, encrypted){

        user.password = encrypted

        next()
    })
});

const transporter = mongoose.model('transporter', tranporterSchema);

module.exports = transporter;