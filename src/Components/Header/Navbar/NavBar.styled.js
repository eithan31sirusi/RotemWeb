import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./images/Logo.svg";

const animationLi = keyframes`
  0%  {
    font-weight: 400;
    opacity:0.3;

  }
  50% {
    font-weight: 500;
    opacity:0.5;


  }
  100%  {
    font-weight: 600;
  }
  `;

export const Nav = styled.nav`
  background-color: HotPink;
  height: 80px;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
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

export const LogoLink = styled(Link)``;

export const NavLogo = styled(Logo)`
  position: relative;
  transform: translate(25em);

  @media (max-width: 1700px) {
    transform: translate(20em);
  }

  @media (max-width: 1550px) {
    transform: translate(15em);
  }

  @media (max-width: 1380px) {
    transform: translate(10em);
  }

  @media (max-width: 1230px) {
    transform: translate(5em);
  }
  @media (max-width: 1070px) {
    transform: translate(2em);
  }
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
