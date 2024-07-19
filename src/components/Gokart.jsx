import React, { useState } from "react";
import BackgroundImg from "../assets/ComponentsImg/Background.png";
import ProductPrecision from "../assets/ProductsImg/ProductPrecision.png";
import ProductVarients from "../assets/ProductsImg/ProductVarients.png";
import GlowButton from "./GlowButton";
import ContactFooter from "./ContactFooter";
import MainFooter from "./MainFooter";
import ProductBenefit from "./ProductBenefit";
import ThreeSixty from "./ThreeSixty";
import Go_kart_Top_Down from "../assets/Go-kart-Top-Down.png";

const productVarientsData = [
  { title: "1 Off Road Kart", details: "5 Kw", imgSrc: ProductVarients },
  { title: "2 Off Road Kart", details: "5 Kw", imgSrc: ProductVarients },
  { title: "3 Off Road Kart", details: "5 Kw", imgSrc: ProductVarients },
  { title: "4 Off Road Kart", details: "5 Kw", imgSrc: ProductVarients },
  { title: "5 Off Road Kart", details: "5 Kw", imgSrc: ProductVarients },
];

function Gokart() {
  const [offset, setOffset] = useState(0);

  const handleNext = () => {
    if (offset < productVarientsData.length - 3) {
      setOffset((prevOffset) => prevOffset + 1);
    }
  };

  const handlePrev = () => {
    if (offset > 0) {
      setOffset((prevOffset) => prevOffset - 1);
    }
  };

  const leftOpacity = offset === 0 ? 0.3 : 1;
  const rightOpacity = offset === productVarientsData.length - 3 ? 0.3 : 1;

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
      <ThreeSixty />
      <ProductBenefit />
      <div className="productPrecision">
        <div className="productPrecisionContainer">
          <div
            style={{
              padding: "80px 40px 40px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "64px",
            }}
          >
            <div className="s-heading">
              <p>Precision Parts for Peak Performance</p>
              <div
                className="s-heading-sub-text"
                style={{ paddingBottom: "8px" }}
              >
                Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam
                felis quis ultrices lacinia proin pellentesque. Vivamus
              </div>
              <GlowButton toLink="/components" text="Let’s Go" />
            </div>
            <div className="productPrecisionImg">
              <img src={ProductPrecision}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="p-gokart-main">
        <div className="p-component-label">
          <p>Component</p>
        </div>
        <div className="p-gokart-div">
          <img src={Go_kart_Top_Down} alt="" />
        </div>
      </div>
      <div className="productSpecification">
        <div className="productSpecificationHeading">
          <div className="s-sub-heading">Specifications</div>
          <div className="s-heading">
            <p>
              Specs <span>that steer excellence</span>
            </p>
            <div className="s-heading-sub-text" style={{ width: "800px" }}>
              Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam
              felis quis ultrices lacinia proin pellentesque. Vivamus est ispre
              oilfg hynm Lorem ipsum dolor sit amet consectetur. Sed imperdiet
              in diam felis quis ultrices lacinia proin
            </div>
          </div>
        </div>
        <div className="productSpecificationContainer">
          <div
            className="productSpecificationSet"
            style={{ borderLeft: "1px solid" }}
          >
            <p className="productHeading">Component Specification</p>
            <div className="productSpecificationInfo">
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
            </div>
          </div>
          <div className="productSpecificationSet">
            <p className="productHeading">Controller Specifications</p>
            <div className="productSpecificationInfo">
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
            </div>
          </div>
          <div className="productSpecificationSet">
            <p className="productHeading">Battery Specifications</p>
            <div className="productSpecificationInfo">
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
            </div>
          </div>
          <div className="productSpecificationSet">
            <p className="productHeading">Motor Specifications</p>
            <div className="productSpecificationInfo">
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
            </div>
          </div>
          <div className="productSpecificationSet">
            <p className="productHeading">Component Specifications</p>
            <div className="productSpecificationInfo">
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
              <div className="productSpecificationInfoSet">
                <p>Motor Type</p>
                <span>PMSM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productVarients">
        <div className="productSpecificationHeading">
          <div className="s-sub-heading">Variants</div>
          <div className="s-heading">
            <p>
              Explore <span>every options</span>
            </p>
            <div className="s-heading-sub-text" style={{ width: "800px" }}>
              Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam
              felis quis ultrices lacinia proin pellentesque. Vivamus est ispre
              oilfg hynm Lorem ipsum dolor sit amet consectetur. Sed imperdiet
              in diam felis quis ultrices lacinia proin
            </div>
          </div>
        </div>
        <div className="productVarientsContainer">
          <svg
            className="productVarientsRight"
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            onClick={handlePrev}
            style={{
              opacity: leftOpacity,
              cursor: offset === 0 ? "not-allowed" : "pointer",
            }}
          >
            <mask id="path-1-inside-1_293_1527" fill="white">
              <path d="M26.3389 14L13.1694 0.830493L-0.000146893 14L13.1694 27.1695L26.3389 14Z" />
            </mask>
            <path
              d="M-0.000146893 14L-3.29252 17.2924L-6.5849 14L-3.29252 10.7076L-0.000146893 14ZM16.4617 4.12287L3.29223 17.2924L-3.29252 10.7076L9.87699 -2.46188L16.4617 4.12287ZM3.29223 10.7076L16.4617 23.8771L9.87699 30.4619L-3.29252 17.2924L3.29223 10.7076Z"
              fill="white"
              mask="url(#path-1-inside-1_293_1527)"
            />
          </svg>
          <div className="productVarientsDiv">
            {productVarientsData
              .slice(offset, offset + 3)
              .map((variant, index) => (
                <div className="productVarientsSet" key={index}>
                  <div className="productVarientsSetImg">
                    <img
                      src={variant.imgSrc}
                      alt={`Product Variant ${index}`}
                    />
                  </div>
                  <div className="productVarientsSetText">
                    <p>{variant.title}</p>
                    <span>{variant.details}</span>
                  </div>
                </div>
              ))}
          </div>
          <svg
            className="productVarientsLeft"
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            onClick={handleNext}
            style={{
              opacity: rightOpacity,
              cursor:
                offset === productVarientsData.length - 3
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            <mask id="path-1-inside-1_293_1551" fill="white">
              <path d="M0.661133 14L13.8306 27.1695L27.0001 14L13.8306 0.830493L0.661133 14Z" />
            </mask>
            <path
              d="M27.0001 14L30.2925 10.7076L33.5849 14L30.2925 17.2924L27.0001 14ZM10.5383 23.8771L23.7078 10.7076L30.2925 17.2924L17.123 30.4619L10.5383 23.8771ZM23.7078 17.2924L10.5383 4.12287L17.123 -2.46188L30.2925 10.7076L23.7078 17.2924Z"
              fill="white"
              mask="url(#path-1-inside-1_293_1551)"
            />
          </svg>
        </div>
      </div>
      <ContactFooter />
      <MainFooter />
    </div>
  );
}

export default Gokart;
