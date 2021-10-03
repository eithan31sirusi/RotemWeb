import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const animationLi = keyframes`
  0%  {
    font-weight: 400;
    border-bottom: 1px solid LavenderBlush;
    opacity:0.3;

  }
  50% {
    font-weight: 500;
    border-bottom: 1px solid LavenderBlush;
    opacity:0.5;


  }
  100%  {
    font-weight: 600;
    border-bottom: 1px solid LavenderBlush;
  }
  `;

export const Nav = styled.nav`
  background-color: HotPink;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

export const NavLi = styled(Link)`
  color: LavenderBlush;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;

  @media screen and(max-width: 768px) {
    display: none;
  }

  &:hover {
    animation: ${animationLi} 0.2s linear forwards;
  }

  &.active {
    border-bottom: 1.7px solid LavenderBlush;
    font-weight: 800 !important;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and(max-width: 768px) {
    display: none;
  }
`;

export const LogoLink = styled(Link)`
  font-size: 3rem;
  position: relative;
  top: 5%;
  color: lightgray;
`;

/* .nav-container {

  li {
    
  }
  .nav-item {
    background-color: lightcoral;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;

    .nav-links-wrap {
      text-decoration: none;
    }
    .nav-links {
      color: black;
      padding: 2rem;
    }

    .nav_active {
      color: green;
    }
  }
} */
