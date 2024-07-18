import React from "react";
import BackgroundImg from "../assets/ComponentsImg/Background.png";
import GlowButton from "./GlowButton";

const Hero = () => {
  return (
    <div className="p-hero">
      <img src={BackgroundImg} alt="" />
      <div className="p-track">
        <div className="p-track-text-div">
          <h1>
            Own the <span>Track </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed ifelis quis ultrices
            lacinia proin pel{" "}
          </p>
        </div>
        <GlowButton text="Race on" />
      </div>
      <div className="p-hero-background">
        <div className="p-hero-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="133"
            height="279"
            viewBox="0 0 133 279"
            fill="none"
          >
            <path
              d="M2.32238 0H57.3296L132.177 136.951L54.8745 279H0L77.4016 137.356L2.32238 0ZM25.7784 15.2932L87.8523 128.859L92.4971 137.356L23.4229 263.707H48.1396L117.114 136.951L50.6279 15.2932H25.7784Z"
              fill="#FAFAFA"
              fillOpacity="0.02"
            />
          </svg>
        </div>
        <div className="p-hero-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="279"
            viewBox="0 0 90 279"
            fill="none"
          >
            <path
              d="M0.181126 55.9133L31.0368 0H86.7316L28.0453 106.203L0.181126 55.9133ZM28.0453 169.443L89.118 279H33.3896L0.176758 224.108L28.0453 169.443Z"
              fill="#FAFAFA"
              fillOpacity="0.02"
            />
          </svg>
        </div>
        <div className="p-hero-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="279"
            viewBox="0 0 160 279"
            fill="none"
          >
            <path
              d="M42.2472 0V244.53V279H64.3169V244.53H159.471V279H64.3169H42.2472H0.117676V0H42.2472Z"
              fill="#FAFAFA"
              fillOpacity="0.02"
            />
          </svg>
        </div>
        <div className="p-hero-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="187"
            height="279"
            viewBox="0 0 187 279"
            fill="none"
          >
            <path
              d="M0.471191 0H45.1108V279H0.471191V0ZM187.001 279H139.492L81.9123 181.429L60.4158 145.002H85.7646C91.2649 145.002 96.7651 144.112 102.186 142.251C107.686 140.309 112.708 137.194 117.172 132.865C121.636 128.576 125.223 122.588 128.013 114.901C130.763 107.133 132.158 97.5853 132.158 86.257C132.158 81.7256 131.52 76.5065 130.245 70.5592C128.969 64.6523 126.419 58.9881 122.592 53.5667C118.766 48.0644 113.346 43.4926 106.331 39.8109C99.3957 36.1697 90.2286 34.3086 78.7499 34.3086H60.4158V0H79.547C91.225 0 102.744 1.90154 114.143 5.66415C125.621 9.46722 135.865 15.1314 144.912 22.6566C154.039 30.2223 161.373 39.4063 166.913 50.1682C172.533 60.8492 175.363 72.9057 175.363 86.257C175.363 106.446 170.739 123.6 161.492 137.72C152.325 151.88 139.89 162.318 124.187 169.115L187.001 279Z"
              fill="#FAFAFA"
              fillOpacity="0.02"
            />
          </svg>
        </div>
        <div className="p-hero-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="155"
            height="279"
            viewBox="0 0 155 279"
            fill="none"
          >
            <path
              d="M7.6648 71.0615C7.6648 60.3705 9.29692 50.832 12.6321 42.4461C15.9318 33.9807 20.3314 26.7872 25.8309 20.8256C31.4014 14.9038 38.0363 10.2936 45.7001 6.99485C53.3639 3.61664 59.5806 1.07308 68.4862 0V19.1784V36.4051C59.758 37.9154 54.8541 41.5718 49.6739 47.3743C44.4583 53.2166 41.8682 61.3243 41.8682 71.6974C41.8682 78.4936 44.5647 84.6538 49.9578 90.1384C55.4218 95.5436 56.8305 98.3966 65.062 103.563V126.577L65.1435 147.687C62.3051 150.35 59.1118 153.41 55.6347 156.908C52.2285 160.405 49.0353 164.379 46.1259 168.831C43.2874 173.282 40.8038 178.369 38.7459 184.092C36.6525 189.815 35.6236 196.015 35.6236 202.692C35.6236 213.105 38.8878 222.047 45.4163 229.559C51.9447 236.991 58.2678 241.641 68.4862 243.549V260.826V279C45.8496 277.49 30.5144 270.336 18.309 257.379C6.10365 244.463 0.000976562 226.976 0.000976562 204.918C0.000976562 186.596 3.83289 171.176 11.4967 158.656C19.1605 146.177 29.1661 136.797 41.5843 130.518C32.0046 122.887 23.9859 114.303 17.4575 104.764C10.929 95.1461 7.6648 83.8987 7.6648 71.0615ZM109.707 131.631C115.668 135.883 121.345 140.454 126.738 145.303C132.131 150.072 136.85 155.397 140.93 161.2C145.081 167.042 148.346 173.441 150.723 180.436C153.171 187.351 154.413 194.863 154.413 203.01C154.413 214.456 152.497 224.79 148.736 234.01C145.046 243.151 139.972 250.941 133.55 257.379C127.093 263.858 119.642 268.985 111.126 272.8C102.611 276.615 95.1519 278.444 85.6076 279V260.826V243.549C90.7168 243.032 93.7055 242.118 97.7857 239.892C101.937 237.667 105.521 234.924 108.572 231.626C111.694 228.247 114.142 224.591 115.952 220.656C117.726 216.642 118.648 212.509 118.648 208.256C118.648 198.4 115.242 189.736 108.43 182.185C101.689 174.554 93.5635 167.4 84.0192 160.723V114.62C84.0192 114.62 91.7501 111.069 95.8804 107.399C99.4748 104.205 99.3046 103.563 103.888 97.7692C108.785 90.3769 111.268 81.4743 111.268 71.0615C111.268 58.1448 108.607 49.2025 103.321 44.1949C97.9986 39.2269 93.1649 36.8423 85.6076 36.4051V19.1784V0.317949C96.6775 0.874364 104.492 2.78203 112.262 6.6769C119.997 10.6115 126.312 15.8577 131.138 22.4154C136.034 29.0128 139.582 36.4051 141.782 44.6718C144.053 52.859 145.188 61.3641 145.188 70.2666C145.188 76.2282 144.124 81.991 142.066 87.5948C139.972 93.2384 137.24 98.6436 133.834 103.81C130.499 109.017 126.667 113.985 122.338 118.754C118.081 123.444 113.858 127.736 109.707 131.631Z"
              fill="#FAFAFA"
              fillOpacity="0.02"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
