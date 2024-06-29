import React from "react";
import Car from "../assets/404car.png"

function Error404() {
  return (
    <div className="Error404">
      <div className="Error404-container">
        <div className="Error-car">
          <img src={Car}></img>
        </div>
        <div className="Error-text">
          <p>Ooops !</p>
          <span>You are off the track ! &nbsp; Let’s Find your route</span>
        </div>
      </div>
      <div className="go-back-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M11.5 17.107L6.5 12.107L11.5 7.10699"
            stroke="#E7E7E7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 17.107L13.5 12.107L18.5 7.10699"
            stroke="#E7E7E7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Go Back</p>
      </div>
    </div>
  );
};

export default Error404;
