import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './rightnav';

const StyledBurger = styled.div`
  width: 3vw;
  height: 4vw;
  position: fixed;
  top: 4vw;
  right: 8vw;
  z-index: 10;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  @media(max-width:460px){
    top:5vw;
    div{
        height:0.4rem;
    }
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#00b4d8' : '#ccc'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(25deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      display: ${({ open }) => open ? 'none' : 'fixed'};
    }
    &:nth-child(3){
        transform: ${({ open }) => open ? 'rotate(-25deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div/>
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger