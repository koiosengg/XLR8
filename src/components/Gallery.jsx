import React, { useState, useRef } from "react";
import galleryImg1 from "../assets/Gallery/s-gallery-img-1.png";
import galleryImg2 from "../assets/Gallery/s-gallery-img-2.png";
import galleryImg3 from "../assets/Gallery/s-gallery-img-3.png";
import galleryImg4 from "../assets/Gallery/s-gallery-img-4.png";
import galleryImg5 from "../assets/Gallery/s-gallery-img-5.png";
import galleryImg6 from "../assets/Gallery/s-gallery-img-6.png";
import galleryImg7 from "../assets/Gallery/s-gallery-img-7.png";
import galleryImg8 from "../assets/Gallery/s-gallery-img-8.png";
import galleryImg9 from "../assets/Gallery/s-gallery-img-9.png";
import galleryImg10 from "../assets/Gallery/s-gallery-img-10.png";
import galleryImg11 from "../assets/Gallery/s-gallery-img-11.png";

const galleryImages = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
  galleryImg7,
  galleryImg8,
  galleryImg9,
  galleryImg10,
  galleryImg11,
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const optionContainerRef = useRef(null);

  const handleUpClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      optionContainerRef.current.scrollBy({
        top: -74.054,
        behavior: "smooth",
      });
    }
  };

  const handleDownClick = () => {
    if (activeIndex < galleryImages.length - 1) {
      setActiveIndex(activeIndex + 1);
      optionContainerRef.current.scrollBy({
        top: 74.054,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="s-gallery">
      <div className="s-sub-heading">Collections</div>
      <div className="s-heading">
        <p>
          Our Gallery
          <br /> <span>of karting experience</span>
        </p>
        <div className="s-heading-sub-text">
          Lorem ipsum dolor sit amet consectetur. Sed imperdiet ifelis quis
          ultrices lacinia proin pel
        </div>
      </div>
      <div className="s-galler-container">
        <div className="s-gallery-img-container">
          <img src={galleryImages[activeIndex]} alt="Gallery" />
        </div>
        <div className="s-gallery-option-container">
          <svg
            className="s-gallery-controls s-control-up"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="29"
            viewBox="0 0 24 29"
            fill="none"
            onClick={handleUpClick}
          >
            <path
              d="M2.98995 19.7472C2.49995 19.165 2.49995 18.2263 2.98995 17.6441L11.3 7.77005C11.69 7.30665 12.32 7.30665 12.71 7.77005L21.02 17.6441C21.51 18.2263 21.51 19.165 21.02 19.7472C20.53 20.3295 19.74 20.3295 19.25 19.7472L12 11.1446L4.74995 19.7591C4.26995 20.3295 3.46995 20.3295 2.98995 19.7472Z"
              fill={activeIndex === 0 ? "#5D5D5D" : "#FFFFFF"}
            />
          </svg>
          <div
            className="s-gallery-option-img-container"
            ref={optionContainerRef}
          >
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                className={
                  index === activeIndex ? "" : "s-gallery-not-active-img"
                }
                alt={`Gallery thumbnail ${index + 1}`}
              />
            ))}
          </div>
          <svg
            className="s-gallery-controls s-control-down"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="29"
            viewBox="0 0 24 29"
            fill="none"
            onClick={handleDownClick}
          >
            <path
              d="M21.01 9.2528C21.5 9.83503 21.5 10.7737 21.01 11.3559L12.7 21.23C12.31 21.6934 11.68 21.6934 11.29 21.23L2.98005 11.3559C2.49005 10.7737 2.49005 9.83502 2.98005 9.2528C3.47005 8.67058 4.26005 8.67058 4.75005 9.2528L12 17.8555L19.25 9.24092C19.73 8.67058 20.53 8.67058 21.01 9.2528Z"
              fill={
                activeIndex === galleryImages.length - 1 ? "#5D5D5D" : "#FFFFFF"
              }
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
