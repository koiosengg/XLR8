import React from "react";
import GlowButton from "./GlowButton";
import Battery from "../assets/battery-icon.png";
const Advantages = () => {
  return (
    <>
      <div className="p-advantages-main">
        <div className="p-advantages-label"> Advantages</div>

        <div className="p-advantage-container-cover">
          <div className="p-adv-container">
            <div className="p-adv-text-div">
              <h1>
                <span> Why we </span> are your Go-karting choice
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam
                felis quis ultrices lacinia proin pellentesque. Vivamus est
                ispre oilfg hynm Lorem ipsum dolor sit amet consectetur. Sed
                imperdiet in diam felis quis ultrices lacinia proin{" "}
              </p>
            </div>
            <div>
              <GlowButton text="Know more" />
            </div>
          </div>

          <div className="p-electrify-desc" style={{ paddingTop: "0px" }}>
            <div className="p-text-card">
              <div className="p-icon-text">
                <div className="p-icon-cover">
                  <div className="p-icon-animate">
                    <img src={Battery} alt="" />
                  </div>
                </div>
                <h1>Header </h1>
              </div>

              <p>
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing{" "}
              </p>
            </div>
            <div className="p-text-card">
              <div className="p-icon-text">
                <div className="p-icon-cover">
                  <div className="p-icon-animate">
                    <img src={Battery} alt="" />
                  </div>
                </div>
                <h1>Header </h1>
              </div>

              <p>
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing{" "}
              </p>
            </div>
            <div className="p-text-card">
              <div className="p-icon-text">
                <div className="p-icon-cover">
                  <div className="p-icon-animate">
                    <img src={Battery} alt="" />
                  </div>
                </div>
                <h1>Header </h1>
              </div>

              <p>
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantages;
