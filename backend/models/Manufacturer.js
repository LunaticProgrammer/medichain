const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const manufacturerSchema = new mongoose.Schema({

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

manufacturerSchema.pre('save',function(next){
    
    const user = this

    bcrypt.hash(user.password , 10 , function(error, encrypted){

        user.password = encrypted

        next()
    })
});

const manufacturer = mongoose.model('manufacturer', manufacturerSchema);

module.exports = manufacturer;