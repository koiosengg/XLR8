import React from "react";
import { Link } from "react-router-dom";

function MainFooter() {
  return (
    <>
      <div className="footerLine"></div>
      <div className="footerEnd">
        <div className="footerEndLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
          >
            <circle
              cx="29.5"
              cy="29.5"
              r="28"
              stroke="#B0B0B0"
              strokeWidth="3"
            />
            <g opacity="0.8">
              <mask
                id="mask0_124_183"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="15"
                y="16"
                width="20"
                height="27"
              >
                <path d="M15 16H34.6217V42.5385H15V16Z" fill="white" />
              </mask>
              <g mask="url(#mask0_124_183)">
                <path
                  d="M16.2379 16.0078H24.0414L34.6594 29.027L23.6931 42.5309H15.9084L26.8889 29.0655L16.2379 16.0078ZM19.5655 17.4617L28.3714 28.2578L29.0304 29.0655L19.2313 41.077H22.7377L32.5226 29.027L23.0907 17.4617H19.5655Z"
                  fill="#36A7BE"
                />
              </g>
            </g>
            <g filter="url(#filter0_i_124_183)">
              <mask
                id="mask1_124_183"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="31"
                y="16"
                width="14"
                height="27"
              >
                <path
                  d="M31.0156 16.0002H44.7729V42.5387H31.0156V16.0002Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask1_124_183)">
                <path
                  d="M32.3248 21.323L36.6455 16.0076H44.4443L36.2266 26.1037L32.3248 21.323ZM36.2266 32.1156L44.7784 42.5306H36.9749L32.3242 37.3123L36.2266 32.1156Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_i_124_183"
                x="32.3242"
                y="16.0076"
                width="12.4487"
                height="79.1461"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="52.6229" />
                <feGaussianBlur stdDeviation="26.3115" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_124_183"
                />
              </filter>
            </defs>
          </svg>
          <div className="footerEndLeftTextContainer">
            <p>Copyright 2024. All Rights Reserved</p>
            <span>
              Crafted by{" "}
              <a href="https://koiosengg.com/" target="_blank">
                Koios Software Solutions
              </a>
            </span>
          </div>
        </div>
        <div className="footerEndRight">
          <div className="footerEndRightSvg">
            <a className="footerFacebook" href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="#D1D1D1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="footerLinkedIn" href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="#D1D1D1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 9H2V21H6V9Z"
                  stroke="#D1D1D1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="#D1D1D1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="footerEndRightTextContainer">
            <Link to="/privacypolicy">
              <p>Privacy Policy</p>
            </Link>
            <Link to="/terms&conditions">
              <p>Terms and Conditions</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFooter;
