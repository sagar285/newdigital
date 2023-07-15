const mongoose =require("mongoose")

const Paymentschema =new mongoose.Schema({
    user:{
   type:String,
   required:true,
    },
    Name:{
     type:String,
     require:true
    },
   AccountNumber:{
    type:Number,
    required:true,
   },
   IfscCode:{
    type:String,
    required:true,
   },
},{timestamps:true})

module.exports =mongoose.model("Payment",Paymentschema);