import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Fade } from "react-bootstrap";
import Instagram from "../Images/instagram.svg";
import LinkedIn from "../Images/linkedin-round-color.svg";
import Facebook from "../Images/facebook.svg";

function About() {
  // <Styles>
  return (
    <Container fluid className="bottom-header">
      <Row>
        <Col xs={12} md={3} sm={6}>
          <p
            style={{
              textAlign: "left",
              padding: "5%",
              lineHeight: "35px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                letterSpacing: "3px",
                color: "#A9A9A9",
              }}
            >
              ABOUT
            </p>
            Findr is a platform to help you grow and find the perfect partner
            <br></br>-<br></br>
            No, dummy, not a date! Partner for your courses, projects, startups,
            anything!
          </p>
        </Col>
        <Col xs={12} md={3} sm={6} className="links">
          <p
            style={{
              fontSize: "x-large",
              textAlign: "left",
              padding: "5%",
              fontSize: "20px",
              letterSpacing: "3px",
              color: "#A9A9A9",
            }}
          >
            LEGAL
          </p>
          <ul
            style={{
              textAlign: "left",
              padding: "0",
              margin: "0",
              marginTop: "-5%",
            }}
          >
            <li class="nav-link">
              <Link to="/Privacy" style={{ fontSize: "large" }}>
                Privacy Policy
              </Link>
              <div class="underline"></div>
            </li>
            <li class="nav-link">
              <Link to="/TermsAndConditions" style={{ fontSize: "large" }}>
                Terms and Conditions
              </Link>
              <div class="underline"></div>
            </li>
            <li class="nav-link">
              <Link to="/Safety" style={{ fontSize: "large" }}>
                Safety Tips
              </Link>
              <div class="underline"></div>
            </li>
            <li class="nav-link">
              <Link to="/Guidelines" style={{ fontSize: "large" }}>
                Community Guidlines
              </Link>
              <div class="underline"></div>
            </li>
          </ul>
        </Col>

        <Col xs={12} md={3} sm={6}>
          <p
            style={{
              fontSize: "large",
              textAlign: "left",
              padding: "5%",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                letterSpacing: "3px",
                color: "#A9A9A9",
              }}
            >
              CONTACT
            </p>
            <br></br>
            <a
              href="mailto:findr.study@gmail.com"
              target="_blank"
              style={{ color: "inherit", marginLeft: "-3%" }}
            >
              findr.study@gmail.com
            </a>
            <br></br>(647)-779-2407
          </p>
          <a
            href="https://www.instagram.com/findr.study/"
            target="_blank"
            style={{ marginRight: "50%" }}
          >
            <img src={Instagram} className="insta-logo" />
          </a>
          <a
            href="https://www.facebook.com/findr.study.3"
            target="_blank"
            style={{ marginRight: "50%" }}
          >
            <img src={Facebook} className="fb-logo" />
          </a>
          <a
            href="https://www.linkedin.com/company/findrapp/"
            target="_blank"
            style={{ marginRight: "50%" }}
          >
            <img src={LinkedIn} className="linkedin-logo" />
          </a>
        </Col>
        <Col xs={12} md={3} sm={6}>
          <p className="launching-soon">Launching Soon</p>
        </Col>
      </Row>
    </Container>
    // </Styles>
  );
}

export default About;
