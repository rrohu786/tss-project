require("mongoose").connect("mongodb+srv://rrohu786:hwBdyozEal5zBNCB@cluster0.zsiavfo.mongodb.net/?retryWrites=true&w=majoritye:")
//mongodb+srv://rrohu786:hwBdyozEal5zBNCB@cluster0.zsiavfo.mongodb.net/?retryWrites=true&w=majority
.then(()=>{
  console.log("DATA BASE CONNECTED");
})

.catch((err)=>{
   console.log("NOT CONNECTED---",err);
});


// rrhou786
// hwBdyozEal5zBNCB