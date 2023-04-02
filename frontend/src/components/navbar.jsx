import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import logo from "../assets/logo.svg"
import Burger from "./hamburger";


const Navbar = () => {
  return (
    <>
     <div className="d-flex py-3" id="navbar">
      <div className="logo-div"><img src={logo} alt="" id="logo" srcset="" /></div>
      <div>
        <Burger/>
      </div>
    </div>
    
    </>
   
  );
};

export default Navbar;
