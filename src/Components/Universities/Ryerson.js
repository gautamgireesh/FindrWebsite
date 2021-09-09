import React, { useState } from "react";
import "../../App.css";
import RyersonDot from "../../Images/Universities/ryerson.png";
import RedDot from "../../Images/pin.svg";
import { Button } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";

class Ryerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: this.props.visi,
      keepPopupAlive: false,
    };
  }
  render() {
    return (
      <div id="UofTDot">
        <img
          src={RedDot}
          id="uoft"
          className="UofTDotMap"
          onMouseOver={() => this.setState({ isVisible: true })}
          onMouseOut={() =>
            setTimeout(
              () => this.setState({ isVisible: false, keepPopupAlive: false }),
              2000
            )
          }
        />
        <div
          class="innerText"
          onMouseEnter={() => {
            this.setState({ keepPopupAlive: true, isVisible: true });
          }}
          onMouseLeave={() => {
            this.setState({ isVisible: false, keepPopupAlive: false });
          }}
          style={this.state.isVisible ? hoverStyle : { display: "none" }}
        >
          <Fade in={this.state.isVisible}>
            <div>
              <img src={RyersonDot} id="UniLogoAlt" />
              <Button variant="light" className="arrow" onClick={() => this.props.decre()}>
              <div className="arrow-text">{"<"}</div>
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

const hoverStyle = {
  display: "block",
  border: "2px solid white",
  backgroundColor: "#fcfdfd",
  width: "10%",
  // height: "10%",
  color: "#1a5d57",
  borderRadius: "0.8em",
  position: "absolute",
  left: "19.5%",
  top: "17%",
  boxShadow: "0px 3px 20px #333333",
};

export default Ryerson;
