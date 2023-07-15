import React from "react";
import { Link } from "react-router-dom";


// this page comes after just login

const Desktop2 = () => {
  return (
    <>
      {/* Navbar */}
      

      {/* Main Image */}
      <div className="container text-center">
        <Link to="/desktop2">
          <img src="/images/logo.png" className="mainImage" alt="..." />
        </Link>
      </div>

      {/* info. cards */}
      <div className="container-fluid row mx-auto mt-3">
        <div className="col-sm-12 col-md-6 col-lg-3 col-12">
          <div
            className="btn card text-bg-light mb-3 mx-auto p-0"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title text-center">
                <strong>
                  14450 Rs
                  <br />
                  Total Earning
                </strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 col-12">
          <div
            className="infoCards btn card text-bg-light mb-3 mx-auto  p-0"
            onClick={(event) => {
              window.location.to = "desktop-13-todayEarning.html";
            }}
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title text-center">
                <strong>
                  100 Rs
                  <br />
                  Today Earning
                </strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 col-12">
          <div
            className="infoCards btn card text-bg-light mb-3 mx-auto p-0"
            onClick={(event) => {
              window.location.to = "desktop-12-teamEarning.html";
            }}
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title text-center">
                <strong>
                  57 Rs
                  <br />
                  Team Earning
                </strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 col-12">
          <div
            className="btn card text-bg-light mb-3 mx-auto p-0"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title text-center">
                <strong>
                  587 Rs
                  <br />
                  Wallet
                </strong>
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Product /images */}
      <div className="container-fluid row products text-center mt-4">
        <div className="col-sm-12 col-md-12 col-lg-4 col-12">
          <Link to="/desktop5">
            <img
              style={{ height: 150, width: 300 }}
              src="/images/plan1.jpg"
              className="img-thumbnail mt-4"
              alt="..."
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-12">
          <Link to="/desktop5">
            <img
              style={{ width: 350 }}
              src="/images/plan2.avif"
              className="img-thumbnail mx-2 mt-4 mt-lg-0"
              alt="..."
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-12">
          <Link to="/desktop5">
            <img
              style={{ height: 150, width: 300 }}
              src="/images/plan3.webp"
              className="img-thumbnail mt-4"
              alt="..."
            />
          </Link>
        </div>
      </div>

      {/* footer */}
      <div className="navbar card mt-4 container footer">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/desktop3">
                <strong>Recharge</strong>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/desktop4">
                <strong>Withdraw</strong>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/desktop9">
                <strong>Projects</strong>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/desktop6">
                <strong>Account</strong>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/desktop7">
                <strong>Contact Us</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Desktop2;
