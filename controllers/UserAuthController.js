const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const key = require("../config/secretKey");


routes.post("/",async(req,res)=>{
 //  console.log(req.body);
 let e = req.body.email;
 let p = req.body.password;
// console.log(req.body);
 let result = await User.find({username : e});
 if(result.length==1){
     if(result[0].password == sha1(p))
     {
        let obj = { id : result[0]._id};
        let token = jwt.sign(obj, key, {expiresIn : '2d'});
        res.send({ success : true, token : token, name : result[0].fullname});
     }
     else{
          res.send({ success : false , errType : 2 })
     }
    }
     else{
         res.send({ success : false , errType : 1})
 }
});


module.exports = routes;
