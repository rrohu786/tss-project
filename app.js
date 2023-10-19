const express = require("express");
const app = express();
const routes = require("./config/allRoutes");
const cors = require("cors");
const upload = require("express-fileupload");

const root = require("path").join(__dirname,"build");

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(upload());
app.use(express.static(__dirname+"/assets"));
app.use(routes);
app.use(express.static(root));

app.get("*",(req,res)=>{
res.sendFile("index.html",{root});
});

const port = process.env.PORT || 8080;
app.listen(port,()=>{
 console.log("server running with port", port);
});

