import React, { useState } from "react";
import Model from "./Model";
import galleryImg1 from "../assets/Gallery/s-gallery-img-1.png";
import galleryImg2 from "../assets/Gallery/s-gallery-img-2.png";
import galleryImg3 from "../assets/Gallery/s-gallery-img-3.png";

const ThreeSixty = () => {
  const models = [
    {
      name: "Product Name Blue",
      img: galleryImg1,
      modelPath: "/go_kart.glb",
    },
    {
      name: "Product Name Beige",
      img: galleryImg2,
      modelPath: "/go_kart.glb",
    },
    {
      name: "Product Name Yellow",
      img: galleryImg3,
      modelPath: "/go_kart.glb",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (activeIndex < models.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="p-three-sixty-main">
      <div className="p-buggy-container">
        <div className="p-buggy-inner-div">
          <div className="p-label-cover-div">
            <div className="p-gap-div">
              <div className="p-buggy-text-container">
                <p>dune </p>
                <p>buggy</p>
              </div>
              <div className="p-buggy-second-div">
                <Model
                  modelPath={models[activeIndex].modelPath}
                  height="80vh"
                  cameraPosition={[5, 2, 5]}
                  enableOrbitControls={false}
                />
              </div>
            </div>
            <div className="s-model-select-container">
              <div className="s-model-select-div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="25"
                  viewBox="0 0 29 25"
                  fill="none"
                  className="s-model-controls"
                  style={{
                    transform: "rotate(180deg)",
                    opacity: activeIndex === 0 ? 0.3 : 1,
                  }}
                  onClick={handlePrevClick}
                >
                  <path
                    d="M9.25359 3.01693C9.83582 2.52693 10.7745 2.52693 11.3567 3.01693L21.2308 11.3269C21.6942 11.7169 21.6942 12.3469 21.2308 12.7369L11.3567 21.0469C10.7745 21.5369 9.83582 21.5369 9.25359 21.0469C8.67137 20.5569 8.67137 19.7669 9.25359 19.2769L17.8562 12.0269L9.24171 4.77693C8.67137 4.29693 8.67137 3.49693 9.25359 3.01693Z"
                    fill="white"
                  />
                </svg>
                <div className="s-model-set-container">
                  {models.map((model, index) => (
                    <div
                      key={index}
                      className={`s-model-set ${
                        index === activeIndex ? "s-active-model" : ""
                      }`}
                    >
                      <img src={model.img} alt={model.name} />
                      <p>{model.name}</p>
                    </div>
                  ))}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="25"
                  viewBox="0 0 29 25"
                  fill="none"
                  className="s-model-controls"
                  style={{
                    opacity: activeIndex === models.length - 1 ? 0.3 : 1,
                  }}
                  onClick={handleNextClick}
                >
                  <path
                    d="M9.25359 3.01693C9.83582 2.52693 10.7745 2.52693 11.3567 3.01693L21.2308 11.3269C21.6942 11.7169 21.6942 12.3469 21.2308 12.7369L11.3567 21.0469C10.7745 21.5369 9.83582 21.5369 9.25359 21.0469C8.67137 20.5569 8.67137 19.7669 9.25359 19.2769L17.8562 12.0269L9.24171 4.77693C8.67137 4.29693 8.67137 3.49693 9.25359 3.01693Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSixty;
