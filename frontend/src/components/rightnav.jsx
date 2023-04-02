import React from 'react';
import styled from 'styled-components';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:1;
  font-weight:600;
  padding-right:2rem;
  @media (max-width: 768px) {
    padding:1.2rem;
    flex-flow: column nowrap;
    position: fixed;
    background-color: #90e0ef;
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
  }
`;
const RightNav = ({ open }) => {
    function handleClickLogin(){
        window.location.href = 'login'
      }
    function handleClickSignup(){
        window.location.href = 'register'
      }
  return (
    <Ul open={open} id="buttons">
      <li id='home-btn' >Home</li>
      <li id='about-btn' >About</li>
      <li id='login-btn' onClick={handleClickLogin}>Login</li>
      <li id='signup-btn' onClick={handleClickSignup}>Signup</li>
    </Ul>
  )
}

export default RightNav