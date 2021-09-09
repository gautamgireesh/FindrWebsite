import React from "react";
import "../App.css";
import Home from "../Images/home.png";
import Match from "../Images/match.png";
import { Container, Row, Col } from "react-bootstrap";

export const Keywords = () => (
  // <Styles>
  <Container fluid className="keywords" id="Features">
    <Row>
      <Col xs={12} md={6} sm={12} className="keywords-caption">
        <p className="keywords-text">unlimited matches</p>
        <p className="keywords-caps">
          find matches for any interest, in any industry!
        </p>
      </Col>
      <Col xs={6} md={3} sm={6} style={{ marginTop: "5%" }}>
        <img src={Home} style={{ width: "100%" }} />
      </Col>
      <Col xs={6} md={3} sm={6} style={{ marginTop: "5%" }}>
        <img src={Match} style={{ width: "85%" }} />
      </Col>
    </Row>
  </Container>
  // </Styles>
);
