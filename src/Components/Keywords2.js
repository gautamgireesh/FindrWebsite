import React from "react";
import "../App.css";
import AddInfo from "../Images/add_info.png";
import Chat from "../Images/chat.png";
import { Container, Row, Col } from "react-bootstrap";

export const Keywords2 = () => (
  // <Styles>
  <Container fluid className="keywords">
    <Row>
      <Col xs={6} md={3} sm={6} style={{ marginBottom: "5%" }}>
        <img src={AddInfo} style={{ width: "90%" }} />
      </Col>
      <Col xs={6} md={3} sm={6} style={{ marginBottom: "5%" }}>
        <img src={Chat} style={{ width: "100%" }} />
      </Col>
      <Col xs={12} md={6} sm={12} className="keywords2-caption">
        <p className="keywords-text">the key is in the details</p>
        <p className="keywords-caps">
          find partners who complement your skills and chat with them!
        </p>
      </Col>
    </Row>
  </Container>
  // </Styles>
);
