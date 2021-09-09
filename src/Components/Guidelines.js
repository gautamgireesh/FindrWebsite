import React, { useState } from "react";
import "../App.css";
import Logo from "../Images/Findr_logo2x.png";
import { Link } from "react-router-dom";
import { Fade } from "react-bootstrap";
import About from "./About";

function Guidelines() {
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
          <h1 className="privacy-title-logo">Findr Community Guidelines</h1>

          <p className="theText">
            We’re glad you’ve joined the Findr community and can’t wait to help
            you find the perfect study partner. The Safety Tips, our Findr
            Community Guidelines and Terms of Conditions are made so every user
            has a safe and pleasant experience both on the app and offline.
            Kindly respect the guidelines outlined below. Failure to do so may
            result in termination of your Findr account. If you find another
            user failing to follow the guidelines, do not hesitate to report
            their account.
          </p>
          <p className="theText">
            Findr is for networking and academic / business connections. Feel
            free to use Findr to find a study partner in your course, an
            assignment partner, someone to go to a Hackathon with, or even pitch
            a startup idea to. However, anyone seeking romantic connections must
            not use Findr.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Age</h3>
          <p className="theText">
            Findr users must be 18 years or older to use the app. Hence, no
            pictures of unaccompanied minors are permitted on the app. Photos of
            those younger than 18 can only be posted if you are present in the
            picture as well.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Private Information</h3>
          <p className="theText">
            For the safety of you and others do not reveal private information
            publicly or privately over the app. This includes, but is not
            limited to the following:
          </p>
          <ul className="privacy-list">
            <li>Address</li>
            <li>Social Security Numbers</li>
            <li>Health Information</li>
            <li>Financial Information</li>
            <li>Passport</li>
            <li>
              Information pertaining to a friend, family or acquaintance of the
              user
            </li>
          </ul>
        </div>
        <div>
          <h3 className="privacy-title">Illegal Activity</h3>
          <p className="theText">
            No sort of illegal activity will be permitted on Findr. Anything
            illegal to do in real life is illegal over the app as well. This
            includes, but is not limited to the following:
          </p>
          <ul className="privacy-list">
            <li>Impersonation</li>
            <li>Scamming</li>
            <li>Prostitution</li>
            <li>Trafficking</li>
            <li>Harassment</li>
            <li>Violence / Physical Harm</li>
          </ul>
        </div>
        <div>
          <h3 className="privacy-title">Impersonation</h3>
          <p className="theText">
            Be you, we love you for who YOU are. So please don’t impersonate
            someone else. Do not post photos that are not of you, and upload
            only your own photos.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Photo Guidelines</h3>
          <ul className="privacy-list">
            <li>No nudity</li>
            <li>No sexual content</li>
            <li>No pornographic content</li>
            <li>No kids</li>
            <li>No depiction of hate speech</li>
            <li>
              No pictures of work that is trademarked/copyrighted by another
              party
            </li>
            <li>No guns</li>
            <li>User’s face must be visible clearly in all photos</li>
          </ul>
        </div>
        <div>
          <h3 className="privacy-title">As a Marketplace</h3>
          <p className="theText">
            Although we encourage users to pitch startup ideas and use the
            platform to meet potential partners for projects, under no
            circumstance can Findr be used to promote or sell goods. Failure to
            comply with this may result in the termination of the user’s
            account.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Respect</h3>
          <p className="theText">
            The community and team behind Findr is a diverse community. At all
            times respect the community. This includes respecting a user’s
            beliefs, race, ideas, interests, background and culture. We at Findr
            are firm believers of kindness and respect. We expect all of our
            uses to be accepting of each other, be mindful, respectful and kind
            at all times. Do not hesitate to report another user if they are
            found in violation of this, Findr will not tolerate rude and
            discriminatory behaviour.
          </p>
        </div>
        <About />
      </div>
    </Fade>
  );
}

export default Guidelines;
