import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.styles.scss";

const NavBar = (props) => {
  return (
    <nav className="nav-container">
      <ul className="nav-item">
        <h3>Logo</h3>
        <Link className="nav-links-wrap" to="/">
          <li className="nav-links">Home</li>
        </Link>
        <Link className="nav-links-wrap" to="/about">
          <li className="nav-links">About</li>
        </Link>
        <Link className="nav-links-wrap" to="/contacts">
          <li className="nav-links">Contact Us</li>
        </Link>
        <Link to="login" className="nav-links-wrap">
          <li className="nav-links">LogIn/Logout</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
