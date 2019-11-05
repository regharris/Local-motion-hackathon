import React from "react";
<<<<<<< HEAD
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <h1 id="title">Local Motion</h1>
    </div>
  );
=======
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/NavBar/Nav.jsx";
import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home.jsx";
import Workshops from "./Components/Workshops/Workshops.jsx";
import Donate from "./Components/Donate/Donate.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import "./CSS/App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route path="/contact" render={() => <Contact />} />
          <Route path="/home" render={() => <Home />} />
          <Route path="/donate" render={() => <Donate />} />
          <Route path="workshops" render={() => <Workshops />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
>>>>>>> dea4737753bff105281e965f533022da907ffe56
}

export default App;
