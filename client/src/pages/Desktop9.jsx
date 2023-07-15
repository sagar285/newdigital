import React from 'react'
import { Link } from 'react-router-dom'


// live project
// 

const Desktop9 = () => {
  return (
    <>
    { /* Navbar */ }
   


    { /* top */ }
    <div className="card mt-4 container footer bg-body-tertiary">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Project Live</strong></p>
        </blockquote>
      </div>
    </div>

    <nav className="info-banners navbar bg-body-secondary container mt-5 pb-1">
      <div className="container-fluid">
        <img src="/images/plan3.webp" style={{ height: 70, width: 120 }} alt="" />
        <form className="d-flex" role="search">
          <h3 style={{ fontSize: "x-large" }} className="mx-3"><span>30</span>$</h3>
          <button className="btn btn-outline-primary" type="submit">Receive</button>
        </form>
      </div>
    </nav>

    <nav className="info-banners navbar bg-body-secondary container mt-2 pb-1">
      <div className="container-fluid">
        <img src="/images/plan1.jpg" style={{ height: 70, width: 120 }} alt="" />
        <form className="d-flex" role="search">
          <h3 style={{ fontSize: "x-large" }} className="mx-3"><span>30</span>$</h3>
          <button className="btn btn-outline-primary" type="submit">Receive</button>
        </form>
      </div>
    </nav>

    <nav className="info-banners navbar bg-body-secondary container mt-2 pb-1">
      <div className="container-fluid">
        <img src="/images/plan2.avif" style={{ height: 70, width: 120 }} alt="" />
        <form className="d-flex" role="search">
          <h3 style={{ fontSize: "x-large" }} className="mx-3">
            <span className="me-3" style={{ fontSize: "medium", color: "red" }}>Exp. Soon</span><span>30</span>$
          </h3>
          <button className="btn btn-outline-primary" type="submit">Receive</button>
        </form>
      </div>
    </nav>

    <nav className="info-banners navbar bg-body-secondary container mt-2 pb-1">
      <div className="container-fluid">
        <img src="/images/plan3.webp" style={{ height: 70, width: 120 }} alt="" />
        <form className="d-flex" role="search">
          <h3 style={{ fontSize: "x-large" }} className="mx-3"><span>30</span>$</h3>
          <button className="btn btn-outline-primary" type="submit">Receive</button>
        </form>
      </div>
    </nav>

    <nav className="info-banners navbar bg-body-secondary container mt-2 pb-1">
      <div className="container-fluid">
        <img src="/images/plan1.jpg" style={{ height: 70, width: 120 }} alt="" />
        <form className="d-flex" role="search">
          <h3 style={{ fontSize: "x-large" }} className="mx-3">
            <span className="me-3" style={{ fontSize: "medium", color: "red" }}>Exp. Soon</span><span>30</span>$
          </h3>
          <button className="btn btn-outline-primary" type="submit">Receive</button>
        </form>
      </div>
    </nav>

    <nav className="info-banners navbar bg-body-secondary container mt-2 pb-1">
      <div className="container-fluid">
        <img src="/images/plan2.avif" style={{ height: 70, width: 120 }} alt="" />
        <form className="d-flex" role="search">
          <h3 style={{ fontSize: "x-large" }} className="mx-3"><span>30</span>$</h3>
          <button className="btn btn-outline-primary" type="submit">Receive</button>
        </form>
      </div>
    </nav>

  </>
  )
}

export default Desktop9