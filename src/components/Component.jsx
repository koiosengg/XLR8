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
import MainFooter from "./MainFooter";

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

  const handleDropdownChange = (event) => {
    setActiveComponent(event.target.value);
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

        {/* Dropdown for component selection */}
        <div className="dropdownComponent">
          <label htmlFor="dropdown">Select a Category</label>
          <select
            id="dropdown"
            name="components"
            value={activeComponent}
            onChange={handleDropdownChange}
          >
            {Object.keys(components).map((key) => (
              <option key={key} value={key}>
                {key.replace(/([A-Z])/g, " $1").trim()}
              </option>
            ))}
          </select>
        </div>

        <div className="componentsMainContainer">
          <div className="componentsSelectorContainer notMobile">
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

          {/* Component Display */}
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
