const express =require("express")
const app=express();
const cors =require("cors");
const PORT = process.env.PORT || 8000
const userroutes =require("./routes/userRoutes")
const productroutes =require("./routes/productRoute")
const path=require("path");
require("./dbconnection/connection");

const _dirname=path.dirname("")
const buildpath = path.join(_dirname,"../client/build")
app.use(express.static(buildpath));
app.use(cors());
app.use(express.json());
app.use(userroutes);
app.use(productroutes);


app.get("/*", function(req, res){

    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
})


app.listen(PORT,()=>{
    console.log(`server runing on port no :${PORT}`)
})
