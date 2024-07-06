import React from 'react';
import { Link } from "react-router-dom";

function GlowButton(props) {
  return (
    <div className="footer-get-quote">
      <Link to={props.toLink} className="footerLinkText">
        <p style={{ flexShrink: "0" }}>{props.text}</p>
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
  );
}

export default GlowButton
