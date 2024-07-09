import React from "react";
import { Link } from "react-router-dom";
import MainProductsSample1 from "../assets/ProductsImg/MainProductsSample1.png";
import MainProductsSample2 from "../assets/ProductsImg/MainProductsSample2.png";

function Products() {
  return (
    <div className="mainProducts">
      <div className="mainProductsContainer">
        <Link to="/products/Gokart" className="mainProductsSet">
          <div className="mainProductsImg">
            <img src={MainProductsSample1}></img>
          </div>
          <p className="mainProductsText">Gokart</p>
        </Link>
        <Link to="/" className="mainProductsSet">
          <div className="mainProductsImg">
            <img src={MainProductsSample2}></img>
          </div>
          <p className="mainProductsText">Dune Buggy</p>
        </Link>
        <Link to="/" className="mainProductsSet">
          <div className="mainProductsImg">
            <img src={MainProductsSample2}></img>
          </div>
          <p className="mainProductsText">Dune Buggy</p>
        </Link>
      </div>
    </div>
  );
}

export default Products;
