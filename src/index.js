import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./App";
import Privacy from "./Components/Privacy";
import TandC from "./Components/T&C";
import Safety from "./Components/Safety"
import Guidelines from "./Components/Guidelines"
import SecondPage from "./SecondPage"

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={HomePage} />
     <Route path="/Privacy" component={Privacy} />
     <Route path="/TermsAndConditions" component={TandC} />
     <Route path="/Safety" component={Safety} />
     <Route path="/Guidelines" component={Guidelines} />
     <Route path="/AboutUs" component={SecondPage} />
     <Route path="/" component={App} />
   </Switch>
   </BrowserRouter>,
   rootElement
 );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
