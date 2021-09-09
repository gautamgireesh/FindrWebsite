import React from "react";
import "../App.css";
import Icon1 from "../Images/icon1.png";
import Icon2 from "../Images/icon2.png";
import Icon3 from "../Images/icon3.png";
import { Container, Row, Col } from "react-bootstrap";

export const WhyFindr2 = () => (
  <Container fluid className="why-findr">
    <Row>
      <Col xs={12} md={4}>
        <img src={Icon1} style={{ width: "80%" }} />
        <figcaption className="pic1cap">don't stop swiping</figcaption>
        <figcaption className="pic1capBottom">
          <br></br>
          find partners for your courses, projects, research. Take your pick!
        </figcaption>
      </Col>
      <Col xs={12} md={4}>
        <img src={Icon2} style={{ width: "80%" }} />
        <figcaption className="pic2cap">network smarter</figcaption>
        <figcaption className="pic2capBottom">
          <br></br>
          find peers from different fields and expand your network!
        </figcaption>
      </Col>
      <Col xs={12} md={4}>
        <img src={Icon3} style={{ width: "80%", marginTop: "-8%" }} />
        <figcaption className="pic3cap">learn with others</figcaption>
        <figcaption className="pic3capBottom">
          <br></br>
          match with people and more!
        </figcaption>
      </Col>
    </Row>
  </Container>
);
