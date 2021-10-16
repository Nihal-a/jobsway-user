import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar({ hide }) {
  return (
    <div className="navbar">
      <div className="container nav-wrapper">
        <Link to="/" className="logo" >JobsWay.</Link>
        {!hide ? (
          <div className="">
           <Link to="signin" className="login-btn">Log In</Link>
           <Link to="signup" className="reg-btn">Register Now</Link>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Navbar;

