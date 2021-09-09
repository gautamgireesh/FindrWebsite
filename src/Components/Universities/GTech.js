import React, { useState } from "react";
import "../../App.css";
import RedDot from "../../Images/pin.svg";
import GTechUni from "../../Images/GTech.png";

function GTech() {
  const [isVisible, setVisible] = useState(false);
  var keepPopupAlive = false;

  return (
    <div id="GTechDot">
      <img
        src={RedDot}
        id="GTech"
        className="GTechRedDotMap"
        onMouseOver={() => setVisible(true)}
        onMouseOut={() =>
          setTimeout(() => !keepPopupAlive && setVisible(false), 1000)
        }
      />
      <div
        class="innerText"
        onMouseEnter={() => {
          keepPopupAlive = true;
          setVisible(true);
        }}
        onMouseLeave={() => {
          keepPopupAlive = false;
          setVisible(false);
        }}
        style={isVisible ? hoverStyle : { display: "none" }}
      >
        <img src={GTechUni} id="UniLogo" />
      </div>
    </div>
  );
}

const hoverStyle = {
  display: "block",
  border: "2px solid white",
  backgroundColor: "#fcfdfd",
  width: "10%",
  color: "#1a5d57",
  borderRadius: "0.8em",
  position: "absolute",
  left: "20.5%",
  top: "27%",
  boxShadow: "0px 3px 20px #333333",
};

export default GTech;
