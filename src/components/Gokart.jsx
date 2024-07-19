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
          <div className="p-gokart-img-cover">
            <div className="p-zoom-point one">
              <svg
                className="before"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Blink on hover">
                  <path
                    id="Vector"
                    d="M0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14Z"
                    fill="#FF0000"
                    fillOpacity="0.4"
                  />
                  <g id="plus-circle">
                    <path
                      id="Vector_2"
                      d="M5.66683 14.0001C5.66683 18.6025 9.39779 22.3334 14.0002 22.3334C18.6025 22.3334 22.3335 18.6025 22.3335 14.0001C22.3335 9.39771 18.6025 5.66675 14.0002 5.66675C9.39779 5.66675 5.66683 9.39771 5.66683 14.0001Z"
                      fill="#FF0000"
                    />
                    <path
                      id="Vector_3"
                      d="M17.3335 14L10.6668 14"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M14 10.6667L14 17.3334"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
              <svg
                className="after"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Blink on hover">
                  <path
                    id="Vector"
                    d="M0.75 33C0.75 50.8112 15.1888 65.25 33 65.25C50.8112 65.25 65.25 50.8112 65.25 33C65.25 15.1888 50.8112 0.75 33 0.75C15.1888 0.75 0.75 15.1888 0.75 33Z"
                    fill="#FF0000"
                    fillOpacity="0.8"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="plus-circle">
                    <path
                      id="Vector_2"
                      d="M24.6668 32.9998C24.6668 37.6022 28.3978 41.3332 33.0002 41.3332C37.6025 41.3332 41.3335 37.6022 41.3335 32.9998C41.3335 28.3975 37.6025 24.6665 33.0002 24.6665C28.3978 24.6665 24.6668 28.3975 24.6668 32.9998Z"
                      fill="white"
                    />
                    <path
                      id="Vector_3"
                      d="M36.3335 33H29.6668"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M33 29.6665V36.3332"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="p-zoom-point two">
              <svg
                className="before"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Blink on hover">
                  <path
                    id="Vector"
                    d="M0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14Z"
                    fill="#FF0000"
                    fillOpacity="0.4"
                  />
                  <g id="plus-circle">
                    <path
                      id="Vector_2"
                      d="M5.66683 14.0001C5.66683 18.6025 9.39779 22.3334 14.0002 22.3334C18.6025 22.3334 22.3335 18.6025 22.3335 14.0001C22.3335 9.39771 18.6025 5.66675 14.0002 5.66675C9.39779 5.66675 5.66683 9.39771 5.66683 14.0001Z"
                      fill="#FF0000"
                    />
                    <path
                      id="Vector_3"
                      d="M17.3335 14L10.6668 14"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M14 10.6667L14 17.3334"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
              <svg
                className="after"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Blink on hover">
                  <path
                    id="Vector"
                    d="M0.75 33C0.75 50.8112 15.1888 65.25 33 65.25C50.8112 65.25 65.25 50.8112 65.25 33C65.25 15.1888 50.8112 0.75 33 0.75C15.1888 0.75 0.75 15.1888 0.75 33Z"
                    fill="#FF0000"
                    fillOpacity="0.8"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="plus-circle">
                    <path
                      id="Vector_2"
                      d="M24.6668 32.9998C24.6668 37.6022 28.3978 41.3332 33.0002 41.3332C37.6025 41.3332 41.3335 37.6022 41.3335 32.9998C41.3335 28.3975 37.6025 24.6665 33.0002 24.6665C28.3978 24.6665 24.6668 28.3975 24.6668 32.9998Z"
                      fill="white"
                    />
                    <path
                      id="Vector_3"
                      d="M36.3335 33H29.6668"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M33 29.6665V36.3332"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="p-zoom-point three">
              <svg
                className="before"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Blink on hover">
                  <path
                    id="Vector"
                    d="M0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14Z"
                    fill="#FF0000"
                    fillOpacity="0.4"
                  />
                  <g id="plus-circle">
                    <path
                      id="Vector_2"
                      d="M5.66683 14.0001C5.66683 18.6025 9.39779 22.3334 14.0002 22.3334C18.6025 22.3334 22.3335 18.6025 22.3335 14.0001C22.3335 9.39771 18.6025 5.66675 14.0002 5.66675C9.39779 5.66675 5.66683 9.39771 5.66683 14.0001Z"
                      fill="#FF0000"
                    />
                    <path
                      id="Vector_3"
                      d="M17.3335 14L10.6668 14"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M14 10.6667L14 17.3334"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
              <svg
                className="after"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Blink on hover">
                  <path
                    id="Vector"
                    d="M0.75 33C0.75 50.8112 15.1888 65.25 33 65.25C50.8112 65.25 65.25 50.8112 65.25 33C65.25 15.1888 50.8112 0.75 33 0.75C15.1888 0.75 0.75 15.1888 0.75 33Z"
                    fill="#FF0000"
                    fillOpacity="0.8"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="plus-circle">
                    <path
                      id="Vector_2"
                      d="M24.6668 32.9998C24.6668 37.6022 28.3978 41.3332 33.0002 41.3332C37.6025 41.3332 41.3335 37.6022 41.3335 32.9998C41.3335 28.3975 37.6025 24.6665 33.0002 24.6665C28.3978 24.6665 24.6668 28.3975 24.6668 32.9998Z"
                      fill="white"
                    />
                    <path
                      id="Vector_3"
                      d="M36.3335 33H29.6668"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M33 29.6665V36.3332"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="p-zoom-point four">
              <svg
                className="before"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Blink on hover">
                  <path
                    id="Vector"
                    d="M0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14Z"
                    fill="#FF0000"
                    fillOpacity="0.4"
                  />
                  <g id="plus-circle">
                    <path
                      id="Vector_2"
                      d="M5.66683 14.0001C5.66683 18.6025 9.39779 22.3334 14.0002 22.3334C18.6025 22.3334 22.3335 18.6025 22.3335 14.0001C22.3335 9.39771 18.6025 5.66675 14.0002 5.66675C9.39779 5.66675 5.66683 9.39771 5.66683 14.0001Z"
                      fill="#FF0000"
                    />
                    <path
                      id="Vector_3"
                      d="M17.3335 14L10.6668 14"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M14 10.6667L14 17.3334"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
              <svg
                className="after"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Blink on hover">
                  <path
                    id="Vector"
                    d="M0.75 33C0.75 50.8112 15.1888 65.25 33 65.25C50.8112 65.25 65.25 50.8112 65.25 33C65.25 15.1888 50.8112 0.75 33 0.75C15.1888 0.75 0.75 15.1888 0.75 33Z"
                    fill="#FF0000"
                    fillOpacity="0.8"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="plus-circle">
                    <path
                      id="Vector_2"
                      d="M24.6668 32.9998C24.6668 37.6022 28.3978 41.3332 33.0002 41.3332C37.6025 41.3332 41.3335 37.6022 41.3335 32.9998C41.3335 28.3975 37.6025 24.6665 33.0002 24.6665C28.3978 24.6665 24.6668 28.3975 24.6668 32.9998Z"
                      fill="white"
                    />
                    <path
                      id="Vector_3"
                      d="M36.3335 33H29.6668"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M33 29.6665V36.3332"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="p-zoom-point five">
              <svg
                className="before"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Blink on hover">
                  <path
                    id="Vector"
                    d="M0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14Z"
                    fill="#FF0000"
                    fillOpacity="0.4"
                  />
                  <g id="plus-circle">
                    <path
                      id="Vector_2"
                      d="M5.66683 14.0001C5.66683 18.6025 9.39779 22.3334 14.0002 22.3334C18.6025 22.3334 22.3335 18.6025 22.3335 14.0001C22.3335 9.39771 18.6025 5.66675 14.0002 5.66675C9.39779 5.66675 5.66683 9.39771 5.66683 14.0001Z"
                      fill="#FF0000"
                    />
                    <path
                      id="Vector_3"
                      d="M17.3335 14L10.6668 14"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M14 10.6667L14 17.3334"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
              <svg
                className="after"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Blink on hover">
                  <path
                    id="Vector"
                    d="M0.75 33C0.75 50.8112 15.1888 65.25 33 65.25C50.8112 65.25 65.25 50.8112 65.25 33C65.25 15.1888 50.8112 0.75 33 0.75C15.1888 0.75 0.75 15.1888 0.75 33Z"
                    fill="#FF0000"
                    fillOpacity="0.8"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="plus-circle">
                    <path
                      id="Vector_2"
                      d="M24.6668 32.9998C24.6668 37.6022 28.3978 41.3332 33.0002 41.3332C37.6025 41.3332 41.3335 37.6022 41.3335 32.9998C41.3335 28.3975 37.6025 24.6665 33.0002 24.6665C28.3978 24.6665 24.6668 28.3975 24.6668 32.9998Z"
                      fill="white"
                    />
                    <path
                      id="Vector_3"
                      d="M36.3335 33H29.6668"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M33 29.6665V36.3332"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <img src={Go_kart_Top_Down} alt="" />
          </div>
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
