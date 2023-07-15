import axios from "axios";
import React, { useState } from "react";
import { Toaster,toast } from "react-hot-toast";
import { Link,useNavigate } from "react-router-dom";


// user account information

const Desktop6 = () => {
  const [Name, setname] = useState("");
  const [AccountNumber, setAccountNumber] = useState("");
  const [IfscCode, setIfscCode] = useState("");
  const  navigate =useNavigate();


  const userpaymentdetail=async(e)=>{
        e.preventDefault();
        const res=await axios.post(`/addpayment`,{Name,AccountNumber,IfscCode})
       if(res.status===200){
        navigate("/auth/userprofile")
       }
  }



  return (
    <>
      {/* Navbar */}

      {/* top */}
      <div className="card mt-4 container footer">
        <div className="card-body text-center">
          <blockquote
            className="blockquote mb-0"
            style={{ fontSize: "xx-large" }}
          >
            <p>
              <strong>Account</strong>
            </p>
          </blockquote>
        </div>
      </div>

      <div className="container text-center">
        <img src="/images/logo.png" className="mainImage mb-1 " alt="..." />
      </div>

      {/* middle */}
      <form>
        <div className="card mt-0 pt-4 pb-0 container footer">
          <div className="card-body text-center coloumn">
            <input
              id="name"
              className="mt-3"
              type="text"
              placeholder="Enter Name"
              onChange={(e)=>setname(e.target.value)}
              style={{
                height: 40,
                width: "60%",
                fontSize: "large",
                color: "black",
              }}
            />
            <br />
            <input
              id="accNo"
              className="mt-3"
              type="number"
              onChange={(e)=>setAccountNumber(e.target.value)}
              placeholder="Enter Account No."
              style={{ height: 40, width: "60%", fontSize: "large" }}
            />
            <br />
            <input
              id="ifscCode"
              className="my-3 mb-4"
              type="text"
              onChange={(e)=>setIfscCode(e.target.value)}
              placeholder="Enter IFSC Code"
              style={{ height: 40, width: "60%", fontSize: "large" }}
            />
            <br />
            <Link
              className="btn btn-dark my-3 me-2 text-bg-dark py-2 px-5"
              to="/auth/userprofile"
            >
              CANCEL
            </Link>
            <Link
              className="btn btn-dark my-3 ms-2 text-bg-dark py-2 px-5"
              onClick={userpaymentdetail}
            >
              UPDATE
            </Link>
          </div>
        </div>
      </form>
      <Toaster/>
    </>
  );
};

export default Desktop6;
