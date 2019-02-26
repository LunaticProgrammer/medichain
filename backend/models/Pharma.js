const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const pharmaSchema = new mongoose.Schema({

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

pharmaSchema.pre('save',function(next){
    
    const user = this

    bcrypt.hash(user.password , 10 , function(error, encrypted){

        user.password = encrypted

        next()
    })
});

const pharma = mongoose.model('pharma', pharmaSchema);

module.exports = pharma;