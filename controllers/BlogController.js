const routes = require("express").Router();
const Blogs = require("../models/Blogs");
const jwt = require("jsonwebtoken");
const key = require("../config/secretKey");
const path = require("path");
const Uniquestr = require("unique-string-generator");

routes.get("/",async(req,res)=>{
    let result = await Blogs.find();
    res.send(result);
});

routes.get("/user",async(req,res)=>{
if(req.headers.authorization)
{
let token = req.headers.authorization;
let obj = jwt.decode(token,key);
let id = obj.id;
let result = await Blogs.find({bloggerid : id});
res.send(result);
}
else
{   
 res.send({ success : false});
}
});
    
routes.get("/:a",async(req,res)=>{
let  result = await Blogs.find({category: req.params.a});
res.send(result);

});


routes.delete("/user/:id",async(req,res)=>{
if(req.headers.authorization)
{
// let token = req.headers.authorization;
// let obj = jwt.decode(token,key);
// let id = obj.id;
// let result = await Blogs.find({bloggerid : id});
// res.send(result);
let id =req.params.id;
await Blogs.deleteMany({_id : id});
 res.send({ success : true});
}
else
{
 res.send({ success : false});
}
});


routes.post("/",async(req,res)=>{
  let uniquename = Uniquestr.UniqueString();

//  console.log(req.files);
//  return;
// console.log(req.body);
// console.log(req.headers);
let token = req.headers.authorization;
let obj = jwt.decode(token,key);
// console.log(obj);
let id = obj.id;
let data = JSON.parse(req.body.formdata);
let file = req.files.image;

let type = req.files.image.mimetype;
let arr =  type.split("/");

let oldname = file.name;
let namearr = oldname.split(".");
let ext = namearr[namearr.length-1];

let newname = uniquename+"."+ext;

if(arr[0] == "video")
{
  data.type="video";
}
if(arr[0] == "image")
{
  data.type="image";
}

file.mv(path.resolve()+"/assets/blog-data/"+newname,async(err)=>{
if (err){
    console.log(err);
    return;
}
// console.log("file uploaded")
// console.log(JSON.parse(req.body.formdata));
// console.log(req.files);
data.image = newname;
data.bloggerid = id;
await Blogs.create(data);
res.send({success: true});
});
});

module.exports= routes; 