import React, { useState } from "react";
import "../App.css";
import Logo from "../Images/Findr_logo_main.svg";
import { Link } from "react-router-dom";
import { Fade } from "react-bootstrap";
import About from "./About";

function Safety() {
  const [open, setOpen] = useState(false);
  setTimeout(() => setOpen(true), 500);
  window.scrollTo(0, 0);
  return (
    <Fade in={open}>
      <div className="legal-background">
        <div>
          <Link to="/">
            <img src={Logo} className="logo-for-terms" />
          </Link>
          <hr />
          <h1 className="privacy-title-logo">Findr Safety Tips</h1>
          <p className="theText">
            We’re glad you’ve joined the Findr community and can’t wait to help
            you find the perfect study partner. The
            <b>
              <Link
                style={{ color: "#1a5d57", textDecoration: "none" }}
                to="/Safety"
              >
                Safety Tips
              </Link>
            </b>
            , our
            <b>
              <Link
                style={{ color: "#1a5d57", textDecoration: "none" }}
                to="/Guidelines"
              >
                Findr Community Guidelines
              </Link>
            </b>
            and
            <b>
              <Link
                to="/TermsAndConditions"
                style={{ color: "#1a5d57", textDecoration: "none" }}
              >
                Terms of Conditions
              </Link>
            </b>{" "}
            are made so every user has a safe and pleasant experience both on
            the app and offline. Kindly respect the guidelines outlined below.
            Failure to do so may result in termination of your Findr account. If
            you find another user failing to follow the guidelines, do not
            hesitate to report their account.
          </p>
          <p className="theText">
            Findr is for networking and academic / business connections. Feel
            free to use Findr to find a study partner in your course, an
            assignment partner, someone to go to a Hackathon with, or even pitch
            a startup idea to. However, anyone seeking romantic connections must
            not use Findr.
          </p>
          <p className="theText">
            As exciting as it is to network and meet new individuals, at Findr
            we encourage our users to be cautious of the interactions they have.
            Safety is our number one priority. Below we have outlined ways to
            stay safe both online and offline.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Offline Safety</h3>
          <ul className="privacy-list">
            <li>
              {" "}
              The Meeting
              <ul className="privacy-list-nested">
                <li>
                  Opt for an initial video call, or phone call before meeting
                  the person in real life
                </li>
                <li>Meet in a public place for the initial meetings</li>
                <li>On the initial meetings stay in public</li>
                <li>
                  Arrive and leave the place of the meeting on your own terms
                  and with your own transportation
                </li>
                <li>Do not hesitate to leave if discomfort is experienced</li>
              </ul>
            </li>
            <li>
              Personal Concern
              <ul className="privacy-list-nested">
                <li>Do not share personal information</li>
                <li>
                  Tell a friend or family member if you are planning on meeting
                  the person
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="privacy-title">Online Safety</h3>
          <ul className="privacy-list">
            <li>
              {" "}
              Information{" "}
              <ul className="privacy-list-nested">
                <li>Do not share personal information</li>
                <li>Do not transfer/request money or financial information</li>
                <li>
                  Do not share in-depth details of your usual routine with
                  someone you do not know well (ex. What class you have on
                  Mondays, where you go to drink coffee every Friday)
                </li>
                <li>
                  Do not share information pertaining to a friend, family or
                  acquaintance of the user
                </li>
                <li>
                  Protect the credentials of your Findr account, and the
                  credentials of any other account
                </li>
              </ul>
            </li>
            <li>
              Behaviour{" "}
              <ul className="privacy-list-nested">
                <li>Report offensive behaviour</li>
                <li>Report suspicious behaviour</li>
                <li>
                  Report behaviour pertaining to hate crime, bullying, or
                  harassment
                </li>
                <li>Report spam</li>
                <li>Report threats of any sort</li>
                <li>Report predatory behaviour</li>
                <li>Report stalking</li>
                <li>
                  Be wary of users that are impatient to meet. Users who are
                  quick to request in-person meetings may not have the best
                  intentions
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <p className="theText">
            We at Findr know, even if users adhere to the above tips, it is
            still possible to be at risk or have a poor experience.
          </p>
          <p className="theText">
            If you ever experience a negative or dangerous interaction, are in
            immediate danger, feel unsafe or suspect misbehaviour:{" "}
            <b>IMMEDIATELY </b>contact your local law enforcement.{" "}
          </p>
        </div>
        <About />
      </div>
    </Fade>
  );
}

export default Safety;
