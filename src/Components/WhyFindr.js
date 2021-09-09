import React, { useState } from "react";
import "../App.css";
import MainImage from "../Images/icon10.png";
import Video from "../Images/website_video_final.mp4";
// import Video from "../Images/website_video.mp4";
import { Container, Row, Col, ResponsiveEmbed, Fade } from "react-bootstrap";

export const WhyFindr = () => {
  return (
    <Container fluid className="why-findr">
      <Row xs={12} md={12}>
        <p className="why-findr-title">why Findr?</p>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <img src={MainImage} className="girl-image" />
        </Col>
        <Col xs={12} md={8}>
          <ResponsiveEmbed aspectRatio="16by9">
            <video
              autostart
              autoplay="autoplay"
              loop="loop"
              muted="muted"
              playsInline
              disablePictureInPicture
              src={Video}
              type="video/mp4"
              style={{ width: "85%", marginLeft: "10%" }}
            />
          </ResponsiveEmbed>
        </Col>
      </Row>
    </Container>
  );
};
