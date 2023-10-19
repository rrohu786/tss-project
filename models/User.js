require("../config/db");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
fullname : String,
username : String,  
password : String,
contact : String,
address : String,
city : String,
state : String
});

module.exports = mongoose.model("user",UserSchema);