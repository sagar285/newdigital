import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../component/Usercontext'


// all available products which add by admin

const Desktop5 = () => {
  const [project,setproject]=useState([]);
  const [walletamount,setwalletamount]=useState('')
  const [rechargeamount,setrechargeamount]=useState('')
  const [userauth]=useAuth();


  const availableprojects =async()=>{
      const res =await axios.get(`/getproduct`);
     if(res){
      setproject(res.data);
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


  const buyproduct =async(p)=>{
    const total=walletamount+rechargeamount;
     if(total>p.price){
      const res=await axios.post(`/userorder/${p._id}`);
      if(res.data.buyerid){
        return alert("this product already pruchased")
      }
      else{
        return alert("sucessfully purchased");
      }
    }
    else{
       return alert("insufficent balance");
    }
  }

  useEffect(()=>{
    availableprojects();
    walletamountvalue();
    rechargeamountvalue();
  },[])




  return (
    <>
{ /* Navbar */ }



    { /* top */ }
    <div className="card mt-4 container footer">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Products</strong></p>
        </blockquote>
      </div>
    </div>

    { /* middle */ }
    <div className="card mt-4 pt-4 pb-4 container footer bg-transparent border-0">
      <div className="card-body text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            project && project.map((p)=>(
              <div className="col-sm-12 col-md-6 col-lg-4 col-12">
            <div className="products card border-5">
              <Link to=""><img src={p.img.url} style={{ height: 180 }} className="card-img-top" alt="..." /></Link>
              <div className="card-body">
                <h5 className="card-title"><Link className="nav-link" to="">Name: {p.name}</Link></h5>
                <h5 className="card-title"><Link className="nav-link" to=""> Price: {p.price}</Link></h5>
                <button onClick={()=>{buyproduct(p)}}>Buy Now</button>
              </div>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </div>

  </>
  )
}

export default Desktop5