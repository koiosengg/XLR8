import React, { useState } from "react";
import Testimony from "../assets/testimony_cover.png";

const Testimonies = () => {
  const testimonies = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Turpis risus eget proin amet at donec gravida blandit purus",
      author: "Lorem Ipsum",
      img: Testimony,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Turpis risus eget proin amet at donec gravida blandit purus",
      author: "Lorem Ipsum",
      img: Testimony,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Turpis risus eget proin amet at donec gravida blandit purus",
      author: "Lorem Ipsum",
      img: Testimony,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Turpis risus eget proin amet at donec gravida blandit purus",
      author: "Lorem Ipsum",
      img: Testimony,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Turpis risus eget proin amet at donec gravida blandit purus",
      author: "Lorem Ipsum",
      img: Testimony,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(testimonies.length / 2);

  const handlePrevClick = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  return (
    <div className="p-testimonies">
      <div className="p-testimonies-label">
        <p>Testimonials</p>
        <h1>
          <span>Stories</span> <br />
          from the track
        </h1>
      </div>
      <div className="s-testimonies-div"></div>
      <div className="s-testimonies-container">
        <div
          className="s-testimonies-left"
          onClick={handlePrevClick}
          style={{ opacity: currentSlide === 0 ? 0.5 : 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.6193 21.0103C16.1293 21.5003 15.3393 21.5003 14.8493 21.0103L6.53928 12.7003C6.14928 12.3103 6.14928 11.6803 6.53928 11.2903L14.8493 2.98029C15.3393 2.49029 16.1293 2.49029 16.6193 2.98029C17.1093 3.47029 17.1093 4.26029 16.6193 4.75029L9.37928 12.0003L16.6293 19.2503C17.1093 19.7303 17.1093 20.5303 16.6193 21.0103Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="s-testimonies-set-container">
          <div
            className="s-testimonies-slide"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, index) => (
              <div className="s-testimonies-set" key={index}>
                {testimonies
                  .slice(index * 2, index * 2 + 2)
                  .map((testimony, i) => (
                    <React.Fragment key={i}>
                      <div className="s-testimonies-details">
                        <div className="heading">
                          <p>{testimony.text}</p>
                          <sub>{testimony.author}</sub>
                        </div>
                        <img src={testimony.img} alt="Testimony" />
                      </div>
                      {i === 0 && <div className="s-testimonies-line"></div>}
                    </React.Fragment>
                  ))}
                {index === totalSlides - 1 && testimonies.length % 2 !== 0 && (
                  <div className="s-testimonies-details"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          className="s-testimonies-right"
          onClick={handleNextClick}
          style={{ opacity: currentSlide === totalSlides - 1 ? 0.5 : 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.38072 21.0103C7.87072 21.5003 8.66072 21.5003 9.15072 21.0103L17.4607 12.7003C17.8507 12.3103 17.8507 11.6803 17.4607 11.2903L9.15072 2.98029C8.66072 2.49029 7.87072 2.49029 7.38072 2.98029C6.89072 3.47029 6.89072 4.26029 7.38072 4.75029L14.6207 12.0003L7.37072 19.2503C6.89072 19.7303 6.89072 20.5303 7.38072 21.0103Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="s-testimonies-indicator">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`s-testimonies-indicator-set ${
              index === currentSlide ? "active-testimony" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
