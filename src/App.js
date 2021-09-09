import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./Components/Nav-Bar";
import { WhyFindr } from "./Components/WhyFindr";
import { WhyFindr2 } from "./Components/WhyFindr2";
import Map from "./Components/Map";
import { Keywords } from "./Components/Keywords";
import { Keywords2 } from "./Components/Keywords2";
import { Contact } from "./Components/Contact";
import About from "./Components/About";
// import { Jumbotron } from "./Components/Jumbotron";
import { Jumbotron } from "./Components/Jumbo_no_iphone";

function App() {
  window.scrollTo(0, 0);
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <WhyFindr />
      <WhyFindr2 />
      <Map />
      <Keywords />
      <Keywords2 />
      <Contact />
      <About />
    </div>
  );
}

export default App;
