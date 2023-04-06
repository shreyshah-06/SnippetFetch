import React from 'react';
import styled from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:1;
  font-weight:600;
  padding-right:0rem;
  padding-left: 0rem;
  *,
  *::after,
  *::before {
      margin: 0;
      box-sizing: border-box; 
      padding: 0;
  }

@media (min-width: 769px){
  //myStyle Start
 
ul{
  padding : 0;
}
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(31,22,59);
    padding: 1.5rem 0rem;
    box-shadow: 0px 2.98256px 7.4564px rgba(13, 124, 105, 0.899);
    height: 11vh;
    width: 100vw;
  
}


.nav--menu {
  display: flex;
  align-items: center;
  justify-content: center;
 
}

.nav--menu li {
  list-style: none;
  padding: 0 1.5rem;
  position: relative;
}

.nav--items a {
  text-decoration: none;
  font-size: 1.08rem;
  font-weight: 600;
  transition: 0.2s ease-in-out;
  color: #39cb8e;
  
}

.nav--items a:hover,
.nav--items a.active {
  color : rgb(8, 122, 8);
}

.nav--items a:hover::after,
.nav--items a.active::after {

  content: "";
  width: 30%;
  height: 2px;
  background:#82a496;
  background: rgb(8, 122, 8);;

  position: absolute;
  bottom: -0.4rem;
  left: 1.5rem;

}


}
  @media (max-width: 768px) {

    padding:1.2rem;
    flex-flow: column nowrap;
    position: fixed;
    // background-color: #90e0ef;
    background-color: rgb(31,22,59);
    box-shadow: 0px 2.98256px 7.4564px rgba(13, 124, 105, 0.899);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 42vh;
    width: 200px;
    border-radius: 0.25rem;
    font-weight:bold;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    transition: transform 0.0s ease-in-out;

    .logoItem{
      display: none;
    }    
    .nav--menu li {
      list-style: none;
   
    }
    
    .nav--items a {
      text-decoration: none;
      transition: 0.2s ease-in-out;
      color: #39cb8e;
      
    }
    
    .nav--items a:hover,
    .nav--items a.active {
      color : rgb(8, 122, 8);
    }
    
    
  
    
  }
`;

const RightNav = ({ open }) => {
  function handleClickLogin() {
    window.location.href = 'login'
  }
  function handleClickSignup() {
    window.location.href = 'register'
  }
  return (
    <Ul open={open} id="buttons">

      <nav className='nav'>
        <a className="logoItem"
          href="">
          <svg id="logo-70" width="78" height="30" viewBox="0 0 78 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z" class="ccustom" fill="#394149"></path> <path d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z" class="ccustom" fill="#394149"></path>
          </svg>
        </a>

        <div>
          <ul className="nav--menu">
            <li id='home-btn' className="nav--items"><a className="active" href="#">Home</a></li>
            <li id='about-btn' className="nav--items"><a href="#">About</a></li>
            <li id='login-btn' className="nav--items" onClick={handleClickLogin}><a>Login</a></li>
            <li id='signup-btn' onClick={handleClickSignup} className="nav--items"><a>Signup</a></li>

            {/* <li id='home-btn' className='nav--items' >Home</li>
            <li id='about-btn' >About</li>
            <li id='login-btn' onClick={handleClickLogin}>Login</li>
            <li id='signup-btn' onClick={handleClickSignup}>Signup</li> */}

          </ul>
        </div>

      </nav>


    </Ul>
  )
}

export default RightNav