require("../config/db");
const mongoose = require("mongoose");

const StuSchema = mongoose.Schema({
name : String,
age : Number

});

module.exports = mongoose.model("student",StuSchema);