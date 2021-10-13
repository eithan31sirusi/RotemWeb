import { React } from "react";
import { NavLi, Nav, NavMenu, LogoLink, NavLogo } from "./NavBar.styled";
import { useLocation } from "react-router-dom";

import "./isActive.scss";

import "./NavBar.styled";

const NavBar = () => {
  const singInPostition = {
    position: "relative",
    right: "100%",
  };
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log(splitLocation);

  return (
    <Nav>
      <NavMenu>
        <LogoLink to="/">
          <NavLogo />
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
          style={singInPostition}
        >
          התחברות/הרשמה
        </NavLi>
      </NavMenu>
    </Nav>
  );
};

export default NavBar;
