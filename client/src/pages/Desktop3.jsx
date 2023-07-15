import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// this page is for user to scan qr code and pay
// here i will show remaining recharge and wallet amount
// get payment details of user
// Name,AccountNumber,IfscCode,dob,kyc

const Desktop3 = () => {
  const [amount,setamount]=useState('');
  const [utrid,setutrid]=useState("");
  const [rechargeamount,setrechargeamount]=useState('')
  const [walletamount,setwalletamount]=useState('')

  const navigate=useNavigate();
   const userrecharge =async(e)=>{
    e.preventDefault();
    const res=await axios.post(`/recharge`,{amount,utrid});
    if(res.status==200){
        navigate("/");
    }
   }


   const walletamountvalue =async()=>{
    const {data}=await axios.get(`/walletamount`);
    setwalletamount(data.walletamountvalue);
  }

   const rechargeamountvalue =async()=>{
    const {data}=await axios.get(`/rechargeamount`);
    setrechargeamount(data.rechargeamountvalue)
  }

  useEffect(()=>{
     rechargeamountvalue();
     walletamountvalue();
  },[]);



  return (
    <>
      {/* top */}
      <div className="card mt-4 container footer">
        <div className="card-body text-center">
          <blockquote
            className="blockquote mb-0"
            style={{ fontSize: "xx-large" }}
          >
            <p>
              <strong>Recharge to Buy Products</strong>
            </p>
          </blockquote>
        </div>
      </div>

      {/* middle */}
      <div className="card mt-4 container footer">
        <div className="card-body text-center">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="card text-bg-dark">
                <div className="card-body row">
                  <h4 className="card-title">Amount Left</h4>
                  <h4 className="card-title text-info"> Rs. {rechargeamount}</h4>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 mt-3 mt-lg-0">
              <div className="card text-bg-dark">
                <div className="card-body">
                  <h4 className="card-title">Wallet</h4>
                  <h4 className="card-title text-info">Rs. {walletamount}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="card mt-4 container footer">
        <div className="card-body text-center">
          <div className="row">
            <div className="col-12 col-lg-6 p-0">
              <div className="card text-bg-light border-0">
                <div className="card-body row mx-auto">
                  <img
                    className="mx-auto mb-1"
                    src="/images/background.avif"
                    alt=""
                    style={{ height: 190, width: 240 }}
                  />
                  <h5 className="card-title">9630939421@ybl</h5>
                  <h5 className="card-title">
                    Scan QR or Use UPI ID
                    <br />
                    for payment
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="card text-bg-light border-0">
                <div className="card-body">
                  <div className="row-cols-md-1 g-4">
                    <div className="col mx-auto">
                      <form>
                        <div className="card text-bg-light border-0">
                          <div className="card-body">
                            <h4 className="card-title">
                              <strong>Enter Payment Details</strong>
                            </h4>
                          </div>
                        </div>
                        <>
                          <input
                            className="mt-3"
                            type="number"
                            onChange={(e)=>setamount(e.target.value)}
                            placeholder="Enter eg:- Rs.3000"
                            style={{
                              height: 40,
                              width: "90%",
                              fontSize: "large",
                            }}
                          />
                          <input
                            className="mt-3"
                            type="number"
                            onChange={(e)=>setutrid(e.target.value)}
                            placeholder="Enter eg:- UTR : 31727462XX49"
                            style={{
                              height: 40,
                              width: "90%",
                              fontSize: "large",
                              color:"black",
                            }}
                          />
                        </>

                        <button onClick={userrecharge} className="my-3 text-bg-dark py-1 px-3">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop3;
