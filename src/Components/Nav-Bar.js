import React from "react";
import "../App.css";
// import navLogo from "../Images/Findr_logo_g.svg";
import { Link } from "react-router-dom";
import Instagram from "../Images/instagram_findr.svg";
import LinkedIn from "../Images/linkedin.png";
import Facebook from "../Images/facebook_new.svg";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import navLogo from "../Images/Findr-logo-white.svg";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ffffff;
    &:hover {
      color: #ffffff;
    }
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg" fixed="top" className="navbar-style" variant="dark">
      <Navbar.Brand href="/">
        <img src={navLogo} className="navLogo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="basic-navbar-nav">
        <Nav className="ml-auto" style={{ alignItems: "center" }}>
          <Nav.Item>
            <Nav.Link class="nav-link">
              <a href="#Home" class="link">
                home
              </a>
              <div class="underline"></div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link class="nav-link" as={Link}>
              <Link to="AboutUs" class="link">
                about
              </Link>
              <div class="underline"></div>
            </Nav.Link>
          </Nav.Item>
          {/* <NavDropdown title="social" id="basic-nav-dropdown">
            <NavDropdown.Item
              href="https://www.instagram.com/findr.study/"
              target="_blank"
            >
              <img src={Instagram} className="insta-logo" />
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.facebook.com/findr.study.3"
              target="_blank"
            >
              <img src={Facebook} className="fb-logo" />
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.linkedin.com/company/findrapp/"
              target="_blank"
            >
              <img src={LinkedIn} className="linkedin-logo" />
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
