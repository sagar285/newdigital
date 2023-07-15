const Userincome =require("../schema/Userincome");
const Wallethistory =require("../schema/wallethistory");
let pre=0;




exports.userleveloneincome = async(arraylength,userid)=>{
    let diff =arraylength-pre;
    let levelamount = 10*diff;
    const isincomeexist =await Userincome.findOne({user:userid})
    if(isincomeexist){
        if(levelamount!=0){
            const newwalletehistory = new Wallethistory({user:userid,amount:levelamount,status:0});
            await newwalletehistory.save();
        }
        isincomeexist.wallet= isincomeexist.wallet+levelamount;
        await isincomeexist.save();
        pre=arraylength;
    }
    else{
        const newwalletehistory = new Wallethistory({user:userid,amount:levelamount,status:0});
        await newwalletehistory.save();
        const newincome = new Userincome({user:userid,wallet:levelamount});
        await newincome.save();
        pre=arraylength;
    }
}



let newpre=0;
exports.userleveltwoincome = async(arraylength,userid)=>{
    let diff = arraylength-newpre;
    let levelamount = 5*diff;
    const isincomeexist =await Userincome.findOne({user:userid})
    if(isincomeexist){
        if(levelamount!=0){
            const newwalletehistory = new Wallethistory({user:userid,amount:levelamount,status:0});
            await newwalletehistory.save();
        }
        isincomeexist.wallet= isincomeexist.wallet+levelamount;
        await isincomeexist.save();
        newpre=arraylength;
    }
    else{
        const newwalletehistory = new Wallethistory({user:userid,amount:levelamount,status:0});
        await newwalletehistory.save();
        const newincome = new Userincome({user:userid,wallet:levelamount});
        await newincome.save();
        pre=arraylength;
    }
}




let newpre2=0;
exports.userlevelthreeincome = async(arraylength,userid)=>{
    let diff = arraylength-newpre2;
    let levelamount = 3*diff;
    const isincomeexist =await Userincome.findOne({user:userid})
    if(isincomeexist){
        if(levelamount!=0){
            const newwalletehistory = new Wallethistory({user:userid,amount:levelamount,status:0});
            await newwalletehistory.save();
        }
        isincomeexist.wallet= isincomeexist.wallet+levelamount;
        await isincomeexist.save();
        newpre2=arraylength;
    }
    else{
        const newwalletehistory = new Wallethistory({user:userid,amount:levelamount,status:0});
        await newwalletehistory.save();
        const newincome = new Userincome({user:userid,wallet:levelamount});
        await newincome.save();
        newpre2=arraylength;
    }
}