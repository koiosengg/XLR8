import React, { useState, useRef, useEffect } from "react";
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

// Array of image objects with source and alt text
const galleryItems = [
  {
    src: galleryImg1,
    alt: "XLR8 Experience - Image 1: Thrilling karting on the track.",
  },
  {
    src: galleryImg2,
    alt: "XLR8 Experience - Image 2: High-speed action at the finish line.",
  },
  {
    src: galleryImg3,
    alt: "XLR8 Experience - Image 3: Racer taking a sharp turn.",
  },
  {
    src: galleryImg4,
    alt: "XLR8 Experience - Image 4: Side view of a kart in action.",
  },
  {
    src: galleryImg5,
    alt: "XLR8 Experience - Image 5: Kart racers gearing up for the race.",
  },
  {
    src: galleryImg6,
    alt: "XLR8 Experience - Image 6: Aerial view of the karting track.",
  },
  {
    src: galleryImg7,
    alt: "XLR8 Experience - Image 7: Close-up of a racer in full gear.",
  },
  {
    src: galleryImg8,
    alt: "XLR8 Experience - Image 8: Spectacular drift on the circuit.",
  },
  {
    src: galleryImg9,
    alt: "XLR8 Experience - Image 9: Racers battling for the lead position.",
  },
  {
    src: galleryImg10,
    alt: "XLR8 Experience - Image 10: Kart speeding down the straight.",
  },
  {
    src: galleryImg11,
    alt: "XLR8 Experience - Image 11: Celebratory shot of the winning moment.",
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const optionContainerRef = useRef(null);
  const imageRefs = useRef([]);

  // Update isMobile state based on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate the cumulative width of images up to the current index
  const calculateScrollWidth = (index) => {
    let totalWidth = 0;
    for (let i = 0; i <= index; i++) {
      totalWidth += imageRefs.current[i]?.offsetWidth || 0;
    }
    return totalWidth;
  };

  // Scroll up based on image width
  const handleUpClick = () => {
    if (activeIndex > 0) {
      const previousIndex = activeIndex - 1;
      setActiveIndex(previousIndex);
      const scrollAmount = calculateScrollWidth(previousIndex);
      optionContainerRef.current.scrollTo({
        left: isMobile
          ? scrollAmount - (imageRefs.current[previousIndex]?.offsetWidth || 0)
          : 0,
        top: isMobile ? 0 : -74.054,
        behavior: "smooth",
      });
    }
  };

  // Scroll down based on image width
  const handleDownClick = () => {
    if (activeIndex < galleryItems.length - 1) {
      const nextIndex = activeIndex + 1;
      setActiveIndex(nextIndex);
      const scrollAmount = calculateScrollWidth(nextIndex);
      optionContainerRef.current.scrollTo({
        left: isMobile ? scrollAmount : 0,
        top: isMobile ? 0 : 74.054,
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
          <img
            src={galleryItems[activeIndex].src}
            alt={galleryItems[activeIndex].alt}
          />
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
            style={{ flexDirection: isMobile ? "row" : "column" }}
          >
            {galleryItems.map((item, index) => (
              <img
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                src={item.src}
                className={
                  index === activeIndex ? "" : "s-gallery-not-active-img"
                }
                alt={item.alt}
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
                activeIndex === galleryItems.length - 1 ? "#5D5D5D" : "#FFFFFF"
              }
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
