const Paymentmodel =require("../schema/Userpayment");
// const [AccountNumber,setAccountNumber]=useState("")
//   const [IfscCode,setIfscCode]=useState("")
//   const [dob,setdob]=useState("")
//   const [phone,setphone] =useState("");
// //   const [amount,setamount] =useState("");

exports.userpaymentdetail=async(req,res)=>{
    const { AccountNumber,IfscCode,Name}=req.body;
    console.log(req.user._id);
    const userdetailcheck = await Paymentmodel.findOne({AccountNumber});
    const security = await Paymentmodel.findOne({user:req.user._id});
    if(userdetailcheck || security){
        return res.status(400).send("this account already add with other user");
    }
    try {
        const newaccountdetail = new Paymentmodel({AccountNumber,IfscCode,Name,user:req.user._id})
        const savedetail = await newaccountdetail.save();
        res.status(200).send(savedetail);  
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getpaymentdetail=async(req,res)=>{
    const paymentinfo = await Paymentmodel.findOne({user:req.user._id});

    if(paymentinfo || paymentinfo==null){
        res.status(200).send(paymentinfo);
    }
    else{
        res.status(400).send({message:"something went wrong"});
    }
}