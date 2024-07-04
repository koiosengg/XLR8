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
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M18 2.5H15C13.6739 2.5 12.4021 3.02678 11.4645 3.96447C10.5268 4.90215 10 6.17392 10 7.5V10.5H7V14.5H10V22.5H14V14.5H17L18 10.5H14V7.5C14 7.23478 14.1054 6.98043 14.2929 6.79289C14.4804 6.60536 14.7348 6.5 15 6.5H18V2.5Z"
                  stroke="#D1D1D1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M17 2.5H7C4.23858 2.5 2 4.73858 2 7.5V17.5C2 20.2614 4.23858 22.5 7 22.5H17C19.7614 22.5 22 20.2614 22 17.5V7.5C22 4.73858 19.7614 2.5 17 2.5Z"
                  stroke="#D1D1D1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.8701C16.1234 12.7023 15.9812 13.5523 15.5937 14.2991C15.2062 15.0459 14.5931 15.6515 13.8416 16.0297C13.0901 16.408 12.2384 16.5397 11.4077 16.406C10.5771 16.2723 9.80971 15.8801 9.21479 15.2852C8.61987 14.6903 8.22768 13.9229 8.09402 13.0923C7.96035 12.2616 8.09202 11.41 8.47028 10.6584C8.84854 9.90691 9.45414 9.2938 10.2009 8.9063C10.9477 8.5188 11.7977 8.37665 12.63 8.50006C13.4789 8.62594 14.2648 9.02152 14.8716 9.62836C15.4785 10.2352 15.8741 11.0211 16 11.8701Z"
                  stroke="#D1D1D1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 7H17.51"
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
