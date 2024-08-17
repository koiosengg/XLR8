import React, { useState } from "react";
import BackgroundImg from "../assets/ComponentsImg/Background.png";
import AxleAssembly from "./AxleAssembly";
import Brakes from "./Brakes";
import BodyParts from "./BodyParts";
import Fasteners from "./Fasteners";
import MotorAndTransmission from "./MotorAndTransmission";
import BatteryAndElectricals from "./BatteryAndElectricals";
import Seat from "./Seat";
import Steering from "./Steering";
import Suspension from "./Suspension";
import MainFooter from "./MainFooter"

function Component() {
  const [activeComponent, setActiveComponent] = useState("AxleAssembly");

  const components = {
    AxleAssembly: <AxleAssembly />,
    Brakes: <Brakes />,
    BodyParts: <BodyParts />,
    Fasteners: <Fasteners />,
    MotorAndTransmission: <MotorAndTransmission />,
    BatteryAndElectricals: <BatteryAndElectricals />,
    Seat: <Seat />,
    Steering: <Steering />,
    Suspension: <Suspension />,
  };

  const handleSelectorClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <div className="componentsBanner">
        <img src={BackgroundImg} alt="Background" />
      </div>
      <div className="componentsContainer">
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="s-sub-heading">Categories</div>
          <div className="s-heading">
            <p>
              Race Ready {""}
              <span>Selections</span>
            </p>
          </div>
        </div>
        <div className="componentsMainContainer">
          <div className="componentsSelectorContainer">
            {Object.keys(components).map((key) => (
              <div
                key={key}
                className={`componentsSelectorSet ${
                  activeComponent === key ? "active" : ""
                }`}
                onClick={() => handleSelectorClick(key)}
              >
                <div className="line"></div>
                <p>{key.replace(/([A-Z])/g, " $1").trim()}</p>
              </div>
            ))}
          </div>
          <div className="componentDisplayContainer">
            {components[activeComponent]}
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default Component;
