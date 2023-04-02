import React, { useState } from "react";
import SignupImg from "../assets/signup.svg";
import Navbar from "../components/navbar";
function Register() {
  //***********states ***********

  const [registerInfo,setregisterInfo]= useState({
    email:"",
    name:"",
    username:"",
    password:"",
    confirmPassword:""
  })

//   console.log(registerInfo)

  //sets user inputs in the state as user enters data

  function handleChange(event) {
    setregisterInfo((prevdata) => {
      return {
        ...prevdata,
        [event.target.name]: event.target.value,
      };
    });
  }

  //function after clicking the register button
  const registerClick = async () => {
    //any field should not be empty
    if (
      registerInfo.name === "" ||
      registerInfo.username === "" ||
      registerInfo.email === "" ||
      registerInfo.password === "" ||
      registerInfo.confirmPassword === ""
    ) {
      window.alert("No Field can be empty");
      return;
    }
    //if password and confirmPassword does not match
    if (registerInfo.password !== registerInfo.confirmPassword) {
      window.alert("Password and Confirm Password don't match");
      setregisterInfo((prevdata) => {
        return {
          ...prevdata,
          password: "",
          confirmPassword:""
        };
      });
      return;
    }

    // stringifies data
    const UserData= registerInfo;
    delete UserData.confirmPassword
    const requestBody = JSON.stringify(UserData);

    // sends data to backend and redirects to login page
    try {
      const response = await fetch("http://localhost:5000/snippetFetch/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });
      const data = await response.json();
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Navbar/>
      <section
        className="justify-content-start row m-0"
        style={{
          height: "95vh",
          width: "100%",
          background: "rgb(34, 33, 35)",
        }}
      >
        <div
          className="col-md-6 p-4 text-light d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "#03045e" }}
        >
          <div className="col-md-7">
            <div className="col d-flex flex-column align-items-start">
              <div className="mb-2">
                <h1 className="fw-bold" style={{fontSize:"1.7rem",color:"#caf0f8"}}>Register</h1>
                {/* <p>Get Started with demo cash and start your trading journey</p> */}
              </div>
              <label className="form-label my-1" style={{fontSize:"0.95rem" }}>
                Name
              </label>
              <input
                type="tel"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                onChange={handleChange}
                value={registerInfo.name}
                style={{ width: "95%",fontSize:"0.9rem",borderRadius:"0.8rem",height:"1.8rem",width:"18rem"}}
              />
              <label className="form-label my-1" style={{ fontSize:"0.95rem"}}>
                Username
              </label>
              <input
                type="tel"
                className="form-control"
                id="name"
                name="username"
                placeholder="Enter Username"
                onChange={handleChange}
                value={registerInfo.username}
                style={{ width: "95%",fontSize:"0.9rem",borderRadius:"0.8rem",height:"1.8rem",width:"18rem"}}
              />
              <label className="form-label my-1" style={{ fontSize:"0.95rem"}}>
                Email Address
              </label>
              <input
                type="email"
                className="form-control my-1"
                id="email"
                name="email"
                placeholder="Eg. abc@xyz.com"
                onChange={handleChange}
                value={registerInfo.email}
                style={{ width: "95%",fontSize:"0.9rem",borderRadius:"0.8rem",height:"1.8rem",width:"18rem" }}
              />
              <label className="form-label my-1" style={{ fontSize: "0.95rem" }}>
                Password
              </label>
              <input
                type="password"
                className="form-control my-1 "
                id="password"
                name="password"
                placeholder="Set A Password"
                onChange={handleChange}
                value={registerInfo.password}
                style={{ width: "95%" , fontSize:"0.9rem",borderRadius:"0.8rem",height:"1.8rem",width:"18rem"}}
              />
              <label className="form-label my-1" style={{ fontSize: "0.95rem" }}>
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control my-1"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-Enter The Password"
                onChange={handleChange}
                value={registerInfo.confirmPassword}
                style={{ width: "95%",fontSize:"0.9rem" ,borderRadius:"0.8rem",height:"1.8rem",width:"18rem"}}
              />
              <div className="row w-100 justify-content-start mt-3 mb-3 mx-0">
                <div
                  className="btn my-0 p-1 rounded-pill"
                  onClick={registerClick}
                  style={{
                    backgroundColor: "#ade8f4",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    width: "6rem",
                  }}
                >
                  SignUp
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6"
          id="Loginimg"
          style={{
            background:
              "linear-gradient(89deg, #03045e 4%, #0077b6 91%)",paddingLeft:"5.1rem",paddingTop:"1.3rem"
          }}
        >
          <img src={SignupImg} id="loginimg1" alt=""/>
        </div>
      </section>
    </>
  );
}

export default Register;
