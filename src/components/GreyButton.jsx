import React from "react";
import { Link } from "react-router-dom";
const GreyButton = (props) => {
  return (
    <div className="p-grey-button">
      <Link to={props.toLink} className="p-grey-text">
        <p style={{ flexShrink: "0" }}>{props.text}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="#D1D1D1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default GreyButton;
