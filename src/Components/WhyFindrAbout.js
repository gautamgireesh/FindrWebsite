import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

export const WhyFindrAbout = () => (
  <Container fluid className="why-findr" id="WhyFindr">
    <Row>
      <p className="why-us2">why us?</p>
    </Row>
    <Row>
      <Col xs={12} md={12} sm={12}>
        <p className="why-us">
          The best partners are those who help you grow and learn better. They
          try to teach you while learning from you too. A partner is someone who
          complements your needs. Yeah, it sounds a lot like a date doesn’t it?
          Well, that’s because it is. When you work on a project, you don’t look
          for someone who has the same skillset as you! We recognise this and
          part of the reason we are able to do that is because we are students
          too!
        </p>
        <p className="why-us">-</p>
        <p className="why-us">
          Productivity happens when you work with people you like and that is
          how Findr was built. We try to match you with such people and help you
          find that ‘perfect someone’.
        </p>
      </Col>
    </Row>
  </Container>
);
