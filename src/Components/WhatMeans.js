import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Chat from "../Images/chat.png";
import {
  CardDeck,
  CardColumns,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Adits from "../Images/Team/team-adits.jpg";
import Mahak from "../Images/Team/team-mahak.jpg";
import Yoothika from "../Images/Team/team-yoot.jpg";

function WhatMeans() {
  return (
    <Container fluid className="why-findr-means" id="Testimonials">
      <Row>
        <p className="findr-mean-title">what does Findr mean to us?</p>
      </Row>
      <Row>
        <CardColumns fluid className="testimonial-text">
          <Col md={4}>
            <Card
              style={{
                border: "transparent",
                borderRadius: "12%",
                padding: "7%",
                width: "90%",
                marginLeft: "4%",
                flex: "1",
              }}
            >
              <Card.Img
                variant="top"
                src={Yoothika}
                className="testimonial-image"
                style={{
                  width: "40%",
                  borderRadius: "50%",
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#1a5d57" }}>
                  Yoothika Taneja
                </Card.Title>
                <Card.Text style={{ fontSize: "large" }}>
                  As a first year political science student it was particularly
                  dificult to make friends or even meet people in a class of
                  1000. It was almost impossible to sit next to the same person
                  every time you went in for a convocation hall lecture.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={{
                border: "transparent",
                borderRadius: "12%",
                padding: "7%",
                width: "90%",
                marginLeft: "5%",
                flex: "1",
              }}
            >
              <Card.Img
                variant="top"
                src={Mahak}
                className="testimonial-image"
                style={{
                  width: "40%",
                  borderRadius: "50%",
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#1a5d57" }}>
                  Shruti Kasera
                </Card.Title>
                <Card.Text style={{ fontSize: "large" }}>
                  I think Findr is a great way to help students connect with
                  each other. It will automatically connect you with people and
                  allow students to form faster and better relationships that
                  cater to immediate needs. It makes looking.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={{
                border: "transparent",
                borderRadius: "12%",
                padding: "7%",
                width: "90%",
                marginLeft: "5%",
                flex: "1",
              }}
            >
              <Card.Img
                variant="top"
                src={Adits}
                className="testimonial-image"
                style={{
                  width: "40%",
                  borderRadius: "50%",
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#1a5d57" }}>Hala Touma</Card.Title>
                <Card.Text style={{ fontSize: "large" }}>
                  Findr is honestly an excellent idea! A lot of students prefer
                  to study in groups/ with a study partner. This app will
                  connect you with people you may not normally see, and is a
                  great way to find a study partner and maybe a friend!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </CardColumns>
      </Row>
    </Container>
  );
}

export default WhatMeans;
