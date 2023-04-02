import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoginImg from "../assets/login.svg"
import Navbar from "../components/navbar";

export default function Login() {

    const[loginInfo,setloginInfo] = useState({
        username:"",
        password:""
    })

    console.log(loginInfo)

    function handleChange(event) {
        setloginInfo((prevdata) => {
          return {
            ...prevdata,
            [event.target.name]: event.target.value,
          };
        });
      }
  //function after login button is beign clicked
  const loginClick = async () => {
    if (loginInfo.username === "" || loginInfo.password === "") {
      window.alert("No Field can be empty");
      return;
    }
    const username = loginInfo.username
    const password = loginInfo.password
    const requestBody = JSON.stringify({
      username,
      password,
    });
    // connecting with backend, verifying if the user if vereified user or not
    // const verification = async () => {
    //   try {
    //     const result = await axios.post("http://localhost:5000/auth/login", requestBody);
    //     if (result.status === 200) {
    //       console.log(result.data.data)
    //       // const { token} = await response.json();
    //       localStorage.setItem('user',result);
    //       window.location.href="/register";
    //       alert("Success");
    //     } else {
    //       alert("Failed");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // verification();
    try {
      const response = fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });
      const { token} = await response.json();
      localStorage.setItem("user", token);
      const path = "/register";
      window.location.href = path;
    }catch(err) {
      console.log(err)
    }
  };
  return (
    <>
    <Navbar/>
      <section
        className="justify-content-start row m-0"
        style={{
          height: "93vh",
          width: "100%",
          background: "rgb(34, 33, 35)",
        }}
      >
        <div className="col-md-6 p-4 text-light d-flex align-items-center justify-content-center" style={{backgroundColor:"#03045e"}}>
          <div className="col-md-7">
            <div className="col d-flex flex-column align-items-start">
              <div className="mb-3">
                <h1 className="fw-bold" style={{fontSize:"1.7rem",color:"#caf0f8"}}>Login</h1>
                {/* <p>Get Started with demo cash and start your trading journey</p> */}
              </div>
              <label className="form-label my-1" style={{ fontSize: "1rem" }}>
                Username
              </label>
              <input
                type="username"
                className="form-control my-1 w-75"
                id="username"
                name="username"
                placeholder="Eg. abc@xyz.com"
                onChange={handleChange}
                value={loginInfo.username}
              />
              <label className="form-label my-1" style={{ fontSize: "1rem" }}>
                Password
              </label>
              <input
                type="password"
                className="form-control my-1 w-75"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
                value={loginInfo.password}
              />
              <div className="row w-100 justify-content-start mt-4 mb-3 mx-0">
                <div
                  className="btn my-1 p-2 rounded-pill"
                  onClick={loginClick}
                  style={{backgroundColor:'#ade8f4' ,color:'black',fontWeight:'bold',fontSize:'1.2rem',width:'7rem'}}
                >
                  Login
                </div>
              </div>
              <p>Not Registered Yet? <Link to="/register" className="text-primary">Create an account</Link></p>
            </div>
          </div>
        </div>
        <div className="col-md-6"  id="Loginimg" style={{background:'linear-gradient(89deg, #03045e 4%, #0077b6 91%)',padding:"4rem"}} >
          <img src={LoginImg} id="loginimg1" alt="" style={{height:"94%"}}/>
        </div>
      </section>
    </>
  );
}

