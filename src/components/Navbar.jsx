import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import OnHoverButton from "./OnHoverButton";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-container">
        <Link to="/">
          <div className="navbar-logo">
            <img src={Logo}></img>
          </div>
        </Link>
        <div className="navbar-buttons-container">
          <div className="navbar-buttons-group">
            <Link to="/products" className="navbarMainLinkText">
              Products
            </Link>
            <Link to="/components" className="navbarMainLinkText">
              Components
            </Link>
            <Link to="/aboutus" className="navbarMainLinkText">
              Our world
            </Link>
          </div>
          <OnHoverButton text="Contact us" toLink="/contact" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
