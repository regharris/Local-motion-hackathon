
import React from "react";
import "./CSS/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/NavBar/Nav.jsx";
import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home.jsx";
import Workshops from "./Components/Workshops/Workshops.jsx";
import Donate from "./Components/Donate/Donate.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";


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
          <Route path="/workshops" render={() => <Workshops />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
