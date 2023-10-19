const routes = require("express").Router();
const Stu = require("../models/Student");

 routes.get("/",async(req,res)=>{
 let result = await Stu.find();
 res.send(result);
});

routes.get("/:id",async(req,res)=>{
let result = await Stu.find({_id : req.params.id});
res.send({ success : true, result : result[0]});
});

routes.post("/",async(req,res)=>{
delete req.body._id;
let result = await Stu.create(req.body);
res.send({ success : true, result });
});

routes.put("/:id",async(req,res)=>{
let result = await Stu.findOneAndUpdate({_id : req.params.id},req.body,{new : true});
// console.log(result);
res.send({ success : true, result });
});

routes.delete("/:id",async(req,res)=>{
let result = await Stu.findByIdAndDelete({_id : req.params.id});
// console.log(result)
res.send({ success : true, result });
});


module.exports = routes;
