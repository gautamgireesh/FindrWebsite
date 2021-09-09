import React, { useState } from "react";
import "../App.css";
import MapPic from "../Images/world_map_final_web.svg";
import BrownU from "./Universities/BrownU";
import NorthWestU from "./Universities/NorthWestU";
import UofT from "./Universities/UofT";
import GTech from "./Universities/GTech";
import { Container, Row, Col, Image } from "react-bootstrap";
import GTA from "./Universities/GTAUni"

function Map() {
  return (
    <Container fluid className="map">
      <Image src={MapPic} rounded fluid style={{ padding: "3%" }} />
      <BrownU />
      <NorthWestU />
      {/* <UofT /> */}
      <GTA />
      <GTech />
    </Container>
  );
}

export default Map;
