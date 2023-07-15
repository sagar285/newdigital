const mongoose =require("mongoose");

const DailyEarningSchema = new mongoose .Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    myearning:{
        type:Number,
        required:true,
    },
    teamearning:{
        type:Number,
        required:true,
    },
    todayearning:{
        type:Number,
        required:true,
    },
    totalearning:{
        type:Number,
        required:true,
    }
})


module.exports = mongoose.model("Earning",DailyEarningSchema);