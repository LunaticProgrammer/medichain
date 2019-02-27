const user = require('../../models/rawMatStocker');
const mongoose = require("mongoose");

module.exports = (req, res) => {


    const { email, password } = req.body;
  // try to find the user
  user.findOne({ email }, (error, user) => {
    if (user) {
          if(user.password === password){
            res.send('successful')
          }else {

            res.send(error);
          }
        }else{
          res.send(error);
}
})
}