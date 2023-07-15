import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Reachargehistory = () => {

  const [withdrawhistory,setwithdrawhistory]=useState([])

const adminwithdraw=async()=>{
  const res=await axios.get(`/adminrecharge`);
  console.log(res)
  setwithdrawhistory(res.data);
}
console.log(withdrawhistory);

useEffect(()=>{
  adminwithdraw();
},[])


  return (
    <>
    { /* top */ }
    <div className="card mt-0 container footer ">
      <div className="card-body text-center mx-auto">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Recharge History</strong></p>
        </blockquote>
        <form className="d-flex mt-4" role="search">
            <input className="form-control me-2 border-3" type="search" placeholder="Search User" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>

    <div>

    {
      withdrawhistory.length>0 ?withdrawhistory.map((r)=>(
        <div className="navbar btn text-bg-light card mt-5 py-1 container info-banners" onClick={event => { window.location.href = 'usersRechargeHistory.html'; }}>
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <h4>{r.user.username}</h4>
            </li>
        </ul></div>
    </div>
      )):(
        <h1 style={{color:"white",textAlign:"center",margin:"20px"}}>No Recharge history</h1>
      )
    }
    </div>
  </>
  )
}

export default Reachargehistory