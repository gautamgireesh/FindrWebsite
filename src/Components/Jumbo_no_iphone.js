import React, { useState } from "react";
import {
  Jumbotron as Jumbo,
  Container,
  Row,
  Col,
  Carousel,
  Fade,
} from "react-bootstrap";
// import logo from "../Images/Findr_logo2x.png";
import Instagram from "../Images/instagram.svg";
import LinkedIn from "../Images/linkedin-round-color.svg";
import Facebook from "../Images/facebook.svg";
import logo from "../Images/Findr_logo_white.svg";
import Particles from "react-particles-js";
import BackArrow from "../Images/back_arrow_green.svg";
import FrontArrow from "../Images/forward_icon_green.svg";
import IPhone from "../Images/iphone.png";
import carousel from "../Images/carousel.png";
import carousel2 from "../Images/carousel2.png";

export const Jumbotron = () => {
  const [open, setOpen] = useState(false);
  setTimeout(() => setOpen(true), 500);
  return (
    <div>
      <Container fluid className="jumbo">
        <Row>
          <Col md={2}></Col>
          <Col xs={11} md={6} className="jumbo-col">
            <Fade in={open}>
              <Container style={{ marginLeft: "10%" }}>
                <img
                  src={logo}
                  className="findr-logo-main"
                  style={{ width: "60%" }}
                />
                <p
                  className="caption"
                  style={{
                    fontStyle: "italic",
                    letterSpacing: "4px",
                    fontSize: "20px",
                    marginTop: "-4%",
                    width: "90%",
                  }}
                >
                  Keep Swiping
                </p>
                <Container fluid className="sub-text">
                  <p>Study Better &nbsp; | &nbsp; Network Smarter </p>
                </Container>
              </Container>
            </Fade>
          </Col>
          <Col md={3}></Col>
        </Row>
        {/* <Row>
          <Col style={{ alignSelf: "center", marginTop: "3%" }}>
            <a href="https://www.instagram.com/findr.study/" target="_blank">
              <img src={Instagram} className="insta-logo" />
            </a>
            <a href="https://www.facebook.com/findr.study.3" target="_blank">
              <img src={Facebook} className="fb-logo" />
            </a>
            <a
              href="https://www.linkedin.com/company/findrapp/"
              target="_blank"
            >
              <img src={LinkedIn} className="linkedin-logo" />
            </a>
          </Col>
        </Row> */}
      </Container>
      <Particles
        style={{ zIndex: "2" }}
        params={{
          particles: {
            line_linked: {
              color: "#ffffff",
              number: {
                value: 10,
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
