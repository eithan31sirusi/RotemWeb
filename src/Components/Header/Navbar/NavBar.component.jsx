import { React } from "react";
import { NavUl, NavLi, Nav, NavMenu, LogoLink } from "./NavBar.styled";
import { useLocation } from "react-router-dom";
import { AiOutlineCamera } from "react-icons/ai";

import "./isActive.scss";

import "./NavBar.styled";

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log(splitLocation);

  return (
    <Nav>
      <NavMenu>
        <LogoLink to="/">
          <AiOutlineCamera />
        </LogoLink>
      </NavMenu>
      <NavMenu>
        <NavLi to="/" className={splitLocation[1] === "" ? "active" : ""}>
          בית
        </NavLi>
      </NavMenu>
      <NavMenu>
        <NavLi
          to="about"
          className={splitLocation[1] === "about" ? "active" : ""}
        >
          עלינו
        </NavLi>
      </NavMenu>
      <NavMenu>
        <NavLi
          to="contacts"
          className={splitLocation[1] === "contacts" ? "active" : ""}
        >
          צרי קשר
        </NavLi>
      </NavMenu>

      <NavMenu>
        <NavLi
          to="login"
          className={splitLocation[1] === "login" ? "active" : ""}
        >
          התחברות/הרשמה
        </NavLi>
      </NavMenu>
    </Nav>
  );
};

export default NavBar;
