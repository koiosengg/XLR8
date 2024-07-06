import React from "react";
import { Link } from "react-router-dom";
import GlowButton from "./GlowButton";
import OnHoverButton from "./OnHoverButton";

function ContactFooter() {
  return (
    <div className="footer">
      <div className="footer-text">
        <p>
          Start Racing <span style={{ fontWeight: "700" }}>Today!</span>
        </p>
        <span className="footer-text-span">
          Lorem ipsum dolor sit amet consectetur. Auctor consectetur aliquam
          sagittis amet amet enim non
        </span>
      </div>
      <div className="footer-button-container">
        <GlowButton text="Get Quote" toLink="/contact" />
        <OnHoverButton text="Contact us" toLink="/contact" />
      </div>
    </div>
  );
}

export default ContactFooter;
