import React from "react";
import Testimony from "../assets/testimony_cover.png";
const testimonies = () => {
  return (
    <div className="p-testimonies">
      <div className="p-testimonies-label">
        <p>Testimonials</p>
        <h1>
          <span>Stories</span> from the track
        </h1>
      </div>
      <div className="p-testimonies-item">
        <div className="p-testimonies-container">
          <div className="p-arrow-left">
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
          <div className="p-testimonies-card-main">
            <div className="p-testimony-div">
              <div className="p-testimonies-card">
                <div className="p-testimony-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Turpis risus eget
                    proin amet at donec gravida blandit purus{" "}
                  </p>
                  <h1>Lorem Ipsum</h1>
                </div>
                <div className="p-circle-img-cover">
                  <img src={Testimony} alt="" />
                </div>
              </div>
              <div className="p-center-line"></div>
              <div className="p-testimonies-card">
                <div className="p-testimony-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Turpis risus eget
                    proin amet at donec gravida blandit purus{" "}
                  </p>
                  <h1>Lorem Ipsum</h1>
                </div>
                <div className="p-circle-img-cover">
                  <img src={Testimony} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-arrow-right">
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
        <div></div>
      </div>
    </div>
  );
};

export default testimonies;
