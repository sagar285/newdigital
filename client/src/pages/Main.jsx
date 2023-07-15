import React from 'react'
import "../styles/main.css"
import { Link } from 'react-router-dom'

// home page

const Main = () => {
  return (
    <>
    { /* Navbar */ }
   

    { /* main image */ }
    <div className="container text-center">
      <Link to="/"><img src="images/logo.png" className="mainImage mb-1" alt="..." /></Link>
    </div>

    { /* cards */ }
    <div className="container cards row mx-auto mt-2">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-12">
        <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
          <img src="images/plan1.jpg" style={{ height: 150 }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Plan 1</h5>
            <p className="card-text">Some quick example text</p>
            <Link to="/desktop10" className="btn btn-primary">Buy It</Link>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-12">
        <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
          <img src="images/plan2.avif" style={{ height: 150 }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Plan 2</h5>
            <p className="card-text">Some quick example text</p>
            <Link to="/desktop10" className="btn btn-primary">Buy It</Link>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-12">
        <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
          <img src="images/plan3.webp" style={{ height: 150 }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Plan 3</h5>
            <p className="card-text">Some quick example text</p>
            <Link to="/desktop10" className="btn btn-primary">Buy It</Link>
          </div>
        </div>
      </div>
    </div>

    { /* footer */ }
    <div className="card mt-2 container footer">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0">
          <p>
            <strong>Register And Login To Purchase Plans And Earn Money From
              Today</strong>
          </p>
        </blockquote>
      </div>
    </div>
  </>
  )
}

export default Main