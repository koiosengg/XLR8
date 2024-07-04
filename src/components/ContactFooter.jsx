import React from "react";
import { Link } from "react-router-dom";

function ContactFooter() {
  return (
    <div className="footer">
      <div className="footer-text">
        <p>
          Start Racing <span style={{ fontWeight: "700" }}>Today!</span>
        </p>
        <span className="footer-text-span">
          Lorem ipsum dolor sit amet consectetur. Auctor consectetur aliquam
          sagittis amet amet enim non
        </span>
      </div>
      <div className="footer-button-container">
        <div className="footer-get-quote">
          <Link to="/contact" className="footerLinkText">
            <p style={{ flexShrink: "0" }}>Get Quote</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M13.5 17L18.5 12L13.5 7"
                stroke="#F6F6F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 17L11.5 12L6.5 7"
                stroke="#F6F6F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className="footerColorRotate"></div>
        </div>
        <div className="navbar-contact-button">
          <Link to="/contact" className="navbarLinkText">
            Contact us
          </Link>
          <div className="borderColorRotate"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactFooter;
