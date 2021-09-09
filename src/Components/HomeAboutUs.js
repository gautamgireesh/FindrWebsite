import React, { useState } from "react";
import "../App.css";
// import logo from "../Images/Findr_logo2x.png";
import logo from "../Images/Findr_logo_white.svg";
import NavBar from "./Nav-Bar-About";
import Particles from "react-particles-js";
import { Jumbotron as Jumbo, Container, Row, Col, Fade } from "react-bootstrap";

export const AboutHome = () => {
  const [open, setOpen] = useState(false);
  setTimeout(() => setOpen(true), 500);
  return (
    <div>
      <Container
        fluid
        className="about-jumbo"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Fade in={open}>
          <Container
            fluid
            style={{ display: "inline-block", verticalAlign: "middle" }}
          >
            <Row>
              <Col>
                <img src={logo} class="about-logo" />
              </Col>
            </Row>
            <Row>
              <Col className="about-us-caption">
                <p className="about-us-main-caption">about us</p>
                <p className="about-us-sub-caption">checkout who we are!</p>
              </Col>
            </Row>
          </Container>
        </Fade>
      </Container>
      <Particles
        params={{
          particles: {
            line_linked: {
              color: "#ffffff",
              number: {
                value: 15,
              },
              size: {
                value: 1,
              },
            },
            color: {
              value: "#ffffff",
            },
          },
        }}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />
    </div>
  );
};

// export default HomeAboutUs;
