import React from "react";
import ProductBenifits from "../assets/ProductsImg/ProductBenifits.png";
import { Link } from "react-router-dom";
const ProductBenefits = () => {
  return (
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="productBenifitsImg">
          <img src={ProductBenifits}></img>
        </div>
      </div>
    </div>
  );
};

export default ProductBenefits;
