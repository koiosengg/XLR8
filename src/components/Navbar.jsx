import React from 'react'
import Logo from "../assets/Logo.png"

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo}></img>
        </div>
        <div className="navbar-buttons-container">
          <div className="navbar-buttons-group">
            <p>Products</p>
            <p>Components</p>
            <p>Our world</p>
          </div>
          <div className="navbar-contact-button">
            <p>Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
