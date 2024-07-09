import React from "react";
import BackgroundImg from "../assets/ComponentsImg/Background.png";
import ProductBenifits from "../assets/ProductsImg/ProductBenifits.png";
import MainFooter from "./MainFooter";
import { Link } from "react-router-dom";

function Gokart() {
  return (
    <div className="productContainer">
      <div className="productBanner">
        <img src={BackgroundImg} alt="Background" />
      </div>
      <div className="productDescription">
        <div className="s-heading">
          <p>
            Product <span>description</span>
          </p>
          <div className="s-heading-sub-text" style={{ width: "812px" }}>
            Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis
            quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg
            hynm Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam
            felis quis ultrices lacinia proin Lorem ipsum dolor sit amet
            consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin
            pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum dolor sit
            amet consectetur. Sed imperdiet in
          </div>
        </div>
        <div className="productDescriptionContainer">
          <div className="productDescriptionSet">
            <span>Max Power</span>
            <p>
              1000<sub>units</sub>
            </p>
          </div>
          <div
            className="productDescriptionSet"
            style={{ borderLeft: "1px solid #FFF" }}
          >
            <span>Max Power</span>
            <p>
              1000<sub>units</sub>
            </p>
          </div>
          <div
            className="productDescriptionSet"
            style={{ borderLeft: "1px solid #FFF" }}
          >
            <span>Max Power</span>
            <p>
              1000<sub>units</sub>
            </p>
          </div>
          <div
            className="productDescriptionSet"
            style={{ borderLeft: "1px solid #FFF" }}
          >
            <span>Max Power</span>
            <p>
              1000<sub>units</sub>
            </p>
          </div>
        </div>
      </div>
      <div className="productBenifits">
        <div className="s-sub-heading">Benefits</div>
        <div className="productBenifitsContainer">
          <div className="s-heading">
            <p>
              Change <span>the game with instant swap</span>
            </p>
            <div className="s-heading-sub-text" style={{ width: "418px" }}>
              Lorem ipsum dolor sit amet consectetur. Magna fermentum diam erat
              nisi et viverra cras nascetur. Ornare congue massa metus enim orci
              molestie viverra elit pellentesque. Mi condimentum ligula eu
              volutpat porta. Est commodo id nibh lectus morbi leo.
            </div>
            <Link to="" className="productBenifitsLink">
              <p>Know more</p>
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="productBenifitsImg">
            <img src={ProductBenifits}></img>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default Gokart;
