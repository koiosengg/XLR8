import React, { useState } from "react";
import ComponentImgSample from "../assets/ComponentsImg/ComponentImgSample.png";

function Steering() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="componentDisplayHeading">
        <p>Steering</p>
        <span>
          Lorem ipsum dolor sit amet consectetur. Pellentesque eget etiam ac
          feugiat quam risus.
        </span>
      </div>
      <div className="componentDisplayDiv">
        <div className="componentDisplaySet">
          <div className="componentDisplayImg">
            <img src={ComponentImgSample} />
          </div>
          <div className="componentDisplayTextContainer">
            <div className="componentDisplayText">
              <p>Product 1</p>
              <span>
                Lorem ipsum dolor sit amet consectetur. Quisque malesuada susp
              </span>
            </div>
            <p className="price">INR 2800</p>
          </div>
        </div>
        <div className="componentDisplaySet">
          <div className="componentDisplayImg">
            <img src={ComponentImgSample} />
          </div>
          <div className="componentDisplayTextContainer">
            <div className="componentDisplayText">
              <p>Product 1</p>
              <span>
                Lorem ipsum dolor sit amet consectetur. Quisque malesuada susp
              </span>
            </div>
            <p className="price">INR 2800</p>
          </div>
        </div>
      </div>
      <div className="componentDisplayDiv">
        <div className="componentDisplaySet">
          <div className="componentDisplayImg">
            <img src={ComponentImgSample} />
          </div>
          <div className="componentDisplayTextContainer">
            <div className="componentDisplayText">
              <p>Product 1</p>
              <span>
                Lorem ipsum dolor sit amet consectetur. Quisque malesuada susp
              </span>
            </div>
            <p className="price">INR 2800</p>
          </div>
        </div>
        <div className="componentDisplaySet">
          <div className="componentDisplayImg">
            <img src={ComponentImgSample} />
          </div>
          <div className="componentDisplayTextContainer">
            <div className="componentDisplayText">
              <p>Product 1</p>
              <span>
                Lorem ipsum dolor sit amet consectetur. Quisque malesuada susp
              </span>
            </div>
            <p className="price">INR 2800</p>
          </div>
        </div>
      </div>
      <div className="componentDisplayDiv">
        <div className="componentDisplaySet">
          <div className="componentDisplayImg">
            <img src={ComponentImgSample} />
          </div>
          <div className="componentDisplayTextContainer">
            <div className="componentDisplayText">
              <p>Product 1</p>
              <span>
                Lorem ipsum dolor sit amet consectetur. Quisque malesuada susp
              </span>
            </div>
            <p className="price">INR 2800</p>
          </div>
        </div>
        <div className="componentDisplaySet">
          <div className="componentDisplayImg">
            <img src={ComponentImgSample} />
          </div>
          <div className="componentDisplayTextContainer">
            <div className="componentDisplayText">
              <p>Product 1</p>
              <span>
                Lorem ipsum dolor sit amet consectetur. Quisque malesuada susp
              </span>
            </div>
            <p className="price">INR 2800</p>
          </div>
        </div>
      </div>
      {showMore && (
        <>
          <div className="componentDisplayDiv">
            <div className="componentDisplaySet">
              <div className="componentDisplayImg">
                <img src={ComponentImgSample} />
              </div>
              <div className="componentDisplayTextContainer">
                <div className="componentDisplayText">
                  <p>Product 1</p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Quisque malesuada
                    susp
                  </span>
                </div>
                <p className="price">INR 2800</p>
              </div>
            </div>
            <div className="componentDisplaySet">
              <div className="componentDisplayImg">
                <img src={ComponentImgSample} />
              </div>
              <div className="componentDisplayTextContainer">
                <div className="componentDisplayText">
                  <p>Product 1</p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Quisque malesuada
                    susp
                  </span>
                </div>
                <p className="price">INR 2800</p>
              </div>
            </div>
          </div>
          <div className="componentDisplayDiv">
            <div className="componentDisplaySet">
              <div className="componentDisplayImg">
                <img src={ComponentImgSample} />
              </div>
              <div className="componentDisplayTextContainer">
                <div className="componentDisplayText">
                  <p>Product 1</p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Quisque malesuada
                    susp
                  </span>
                </div>
                <p className="price">INR 2800</p>
              </div>
            </div>
            <div className="componentDisplaySet">
              <div className="componentDisplayImg">
                <img src={ComponentImgSample} />
              </div>
              <div className="componentDisplayTextContainer">
                <div className="componentDisplayText">
                  <p>Product 1</p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Quisque malesuada
                    susp
                  </span>
                </div>
                <p className="price">INR 2800</p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="componentButtonDiv">
        {!showMore && (
          <div
            className="LoadMore componentButton"
            onClick={() => setShowMore(true)}
          >
            <p>Load more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M6.5 9L12.5 15L18.5 9"
                stroke="#3D3D3D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        {showMore && (
          <div
            className="SeeLess componentButton"
            onClick={() => setShowMore(false)}
          >
            <p>See less</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M6.5 9L12.5 15L18.5 9"
                stroke="#3D3D3D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}

export default Steering;
