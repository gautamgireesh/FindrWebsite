import React from "react";
import "../App.css";
import BackArrow from "../Images/back_arrow_green.svg";
import FrontArrow from "../Images/forward_icon_green.svg";
import iPhone from "../Images/iphone.png";
import logo from "../Images/Findr_logo2x.png";
import Particles from "react-particles-js";

function Home() {
  return (
    <div
      className="Home"
      id="Home"
      style={{
        position: "relative",
      }}
    >
      <Particles
        params={{
          particles: {
            line_linked: {
              color: "#1a5d57",
              number: {
                value: 15,
              },
              size: {
                value: 1,
              },
            },
            color: {
              value: "#1a5d57",
            },
          },
        }}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />

      <div style={{ position: "absolute", marginTop: "8%", width: "100%" }}>
        <div
          style={{
            display: "inline-block",
            width: "50%",
            marginLeft: "7%",
            marginTop: "8%",
            verticalAlign: "top",
            float: "left",
          }}
        >
          <div
            style={{
              display: "inline-block",
              width: "50%",
              alignContent: "center",
            }}
          >
            <img src={logo} className="logo" />
            <figcaption className="caption">Keep Swiping</figcaption>
          </div>

          <div style={{ display: "inline-block", width: "50%" }}>
            <p className="home-screen-msg">Study Better!</p>
            <p className="home-screen-msg1">Network Smarter!</p>
            <br></br>
            <br></br>
            <p className="launching">Launching Soon!</p>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "35%",
            marginTop: "2%",
            float: "right",
            marginRight: "5%",
          }}
        >
          <div style={{ width: "100%" }}>
            <img className="back-arrow" src={BackArrow} />
            <img src={iPhone} className="iphone" />
            <img className="forward-arrow" src={FrontArrow} />
            {/* <img src={Dots} className="dots" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
