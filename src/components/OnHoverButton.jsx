import React from "react";
import { Link } from "react-router-dom";

function OnHoverButton(props) {
  return (
    <div className="navbar-contact-button">
      <Link to={props.toLink} className="navbarLinkText">
        {props.text}
      </Link>
      <div className="borderColorRotate"></div>
    </div>
  );
}

export default OnHoverButton;
