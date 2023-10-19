const routes = require("express").Router();
const path = require("path");

routes.post("/",async(req,res)=>{
// console.log(req.body);
// console.log(req.files);
let filedata = req.files.photo;
filedata.mv(path.resolve()+"/assets/images/"+filedata.name,(err)=>{
if(err){
    console.log(err);
    return;
}
// console.log("**********UPLODED");
res.send({ success : true })
});
});


module.exports = routes;