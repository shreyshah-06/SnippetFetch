import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import logo from "../assets/logo.svg"
import Burger from "./hamburger";


const Navbar = () => {
  return (
    <>
      <div >
        {/* <div className="logo-div"><img src={logo} alt="" id="logo" srcset="" /></div> */}
        <div className="nav">
          <Burger />
        </div>
      </div>

    </>

  );
};

export default Navbar;
