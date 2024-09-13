import React from "react";
import GreyButton from "./GreyButton"
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
          <div className="s-heading-sub-text">
            Lorem ipsum dolor sit amet consectetur. Magna fermentum diam erat
            nisi et viverra cras nascetur. Ornare congue massa metus enim orci
            molestie viverra elit pellentesque. Mi condimentum ligula eu
            volutpat porta. Est commodo id nibh lectus morbi leo.
          </div>
          <GreyButton text="Know more" toLink="/contact" />
        </div>
        <div className="productBenifitsImg">
          <img src={ProductBenifits}></img>
        </div>
      </div>
    </div>
  );
};

export default ProductBenefits;
