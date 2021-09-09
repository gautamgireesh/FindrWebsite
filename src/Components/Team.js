import React, { Component, useState } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import {
  CardDeck,
  CardColumns,
  CardImg,
  Collapse,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import arrow from "../Images/back_arrow_green.svg";
import Harsh from "../Images/Team/team-harsh.jpg";
import Lux from "../Images/Team/team-lux.jpg";
import Parry from "../Images/Team/team-parry.jpg";
import GG from "../Images/Team/team-gg.jpg";
import Shakshi from "../Images/Team/team-shaakshi.jpg";
import Parshva from "../Images/Team/team-parshva.jpg";
import Saakshi from "../Images/Team/team-saak.jpg";
import Ibby from "../Images/Team/team-ibby.jpg";
import Adits from "../Images/Team/team-adits.jpg";
import Mahak from "../Images/Team/team-mahak.jpg";
import Yoothika from "../Images/Team/team-yoot.jpg";
import Alexie from "../Images/Team/team-alexie.jpg";
import Vasudev from "../Images/Team/team-vasudev.jpg";
import Hans from "../Images/Team/team-hans.jpg";
import Aavi from "../Images/Team/team-aavi.jpg";
import Jahnvi from "../Images/Team/team-jahnvi.jpg";
import Hodo from "../Images/Team/team-hodo.jpg";

function Team() {
  const [openMarketing, setOpenMarketing] = useState(false);
  const [openDev, setOpenDev] = useState(false);
  const [openAmbass, setOpenAmbass] = useState(false);
  return (
    <div className="findr-team" id="Team">
      <p className="meet-team">meet the team!</p>
      <Container style={{ marginBottom: "3%" }}>
        <Row>
          <Col>
            <p className="meet-team-sub">
              Meet this awesome group who have been with us through this entire
              journey. From the ones in charge of our awesome social media to
              those who hype it up on each campus. And of course, the ones we
              fire if there are bugs on the app!
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Button
            style={{
              backgroundColor: "#fcfdfd",
              color: "#1a5d57",
              width: "100%",
              height: "5vh",
              outline: "none",
              boxsizing: "border-box",
              padding: "8px 32px",
              borderWidth: "0",
              position: "relative",
              fontSize: "x-large",
              marginBottom: "1%",
            }}
            onClick={() => setOpenMarketing(!openMarketing)}
            aria-controls="example-collapse-text"
            aria-expanded={openMarketing}
          >
            marketing team&nbsp; &nbsp;{" "}
            <img src={arrow} className="meet-team-arrow" />
          </Button>
          {/* - the ones behind our
            awesome instagram */}
          <Collapse in={openMarketing} style={{ marginTop: "3%" }}>
            <div>
              <CardColumns className="team-styles">
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: 1,
                  }}
                  bg="transparent"
                  md={3}
                >
                  <Card.Img
                    variant="top"
                    src={Harsh}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Harsh Jhunjhunwala
                    </Card.Title>
                    <Card.Text className="team-subtext">Founder</Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: 1,
                  }}
                  bg="transparent"
                  md={3}
                >
                  <Card.Img
                    variant="top"
                    src={Parry}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Parnikaa Uppal
                    </Card.Title>
                    <Card.Text className="team-subtext">Lead Design</Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: 1,
                  }}
                  bg="transparent"
                  md={3}
                >
                  <Card.Img
                    variant="top"
                    src={Shakshi}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Shakshi Sharma
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Marketing Strategy
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: 1,
                  }}
                  bg="transparent"
                  md={3}
                >
                  <Card.Img
                    variant="top"
                    src={Saakshi}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Saakshi Shah
                    </Card.Title>
                    <Card.Text className="team-subtext">Lead Design</Card.Text>
                  </Card.Body>
                </Card>
                {/* <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}></Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}></Card.Text className="team-subtext">
            </Card.Body>
          </Card> */}
              </CardColumns>
            </div>
          </Collapse>
          <br></br>
        </Row>
        <Row>
          <Button
            style={{
              backgroundColor: "#fcfdfd",
              color: "#1a5d57",
              width: "100%",
              height: "5vh",
              boxsizing: "border-box",
              padding: "8px 32px",
              borderWidth: "0",
              position: "relative",
              fontSize: "x-large",
              marginBottom: "1%",
              // textAlign: "left",
            }}
            onClick={() => setOpenDev(!openDev)}
            aria-controls="example-collapse-text"
            aria-expanded={openDev}
          >
            development team&nbsp; &nbsp;
            <img src={arrow} className="meet-team-arrow" />
          </Button>
          {/* - the ones we fire if
            you find bugs in the app */}
          <Collapse fluid in={openDev} style={{ marginTop: "3%" }}>
            <div>
              <CardColumns className="team-styles">
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: 1,
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Lux}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Lakshya Gupta
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Backend Developer
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: 1,
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={GG}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Gautam Gireesh
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Frontend Developer
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: 1,
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Ibby}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Ibrahim Fazili
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Frontend Developer
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: 1,
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Parshva}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Parshva Shah
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Frontend Developer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns fluid className="team-styles">
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: 1,
                  }}
                  bg="transparent"
                >
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}></Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: 1,
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Adits}
                    // className="team-aditi-image"
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Aditi Dagar
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Backend Developer
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: 1,
                  }}
                  bg="transparent"
                >
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}></Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
            </div>
          </Collapse>
          <br></br>
        </Row>
        <Row>
          <Button
            style={{
              backgroundColor: "#fcfdfd",
              color: "#1a5d57",
              width: "100%",
              height: "5vh",
              boxsizing: "border-box",
              padding: "8px 32px",
              borderWidth: "0",
              position: "relative",
              fontSize: "x-large",
              marginBottom: "1%",
            }}
            onClick={() => setOpenAmbass(!openAmbass)}
            aria-controls="example-collapse-text"
            aria-expanded={openAmbass}
          >
            student ambassador team &nbsp; &nbsp;
            <img src={arrow} className="meet-team-arrow" />
          </Button>
          {/* - the ones who
            hype sh*t up! */}
          <Collapse in={openAmbass} style={{ marginTop: "3%" }}>
            <div>
              <CardColumns className="team-styles">
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: "1",
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Mahak}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Mahak Jain
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Student Ambassador - University of Toronto
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: "1",
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Yoothika}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Yoothika Tanja
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Student Ambassador - University of Toronto
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: "1",
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Alexie}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Alexie El Morr
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Student Ambassador - University of Toronto
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: "1",
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Vasudev}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Vasudev Agarwal
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Student Ambassador - Brown University
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns className="team-styles">
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: "1",
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Hans}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Hans Bala
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Student Ambassador - Brown University
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: "1",
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Aavi}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Aavi Deora
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Student Ambassador - Northwestern University
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: "1",
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Jahnvi}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Jahnvi Hariani
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Student Ambassador - Georgia Tech University
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    border: "transparent",
                    borderRadius: "10%",
                    flex: "1",
                  }}
                  bg="transparent"
                >
                  <Card.Img
                    variant="top"
                    src={Hodo}
                    style={{
                      width: "25%",
                      height: "12vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#1a5d57" }}>
                      Hodo Wardheer
                    </Card.Title>
                    <Card.Text className="team-subtext">
                      Student Ambassador - Ryerson University
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
            </div>
          </Collapse>
        </Row>
      </Container>
    </div>
  );
}

export default Team;
