import React, { useState } from "react";
import "../../App.css";
import RedDot from "../../Images/pin.svg";
import BrownUni from "../../Images/Universities/brown_uni.png";
import { Container, Row, Col, Image } from "react-bootstrap";

function BrownU() {
  const [isVisible, setVisible] = useState(false);
  var keepPopupAlive = false;

  return (
    <Container fluid id="BostonUDot">
      <img
        src={RedDot}
        id="BrownU"
        className="redDotMap"
        onMouseOver={() => setVisible(true)}
        onMouseOut={() =>
          setTimeout(() => !keepPopupAlive && setVisible(false), 1000)
        }
      />
      {/* <div className="brown-box"></div> */}
      <div
        className="innerText"
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
        <img src={BrownUni} id="UniLogo" />
      </div>
    </Container>
  );
}

const hoverStyle = {
  display: "block",
  border: "2px solid white",
  backgroundColor: "#fcfdfd",
  width: "10%",
  height: "10%",
  color: "#1a5d57",
  borderRadius: "0.8em",
  position: "absolute",
  left: "20.5%",
  top: "27%",
  boxShadow: "0px 3px 20px #333333",
  zIndex: 1
};

export default BrownU;
