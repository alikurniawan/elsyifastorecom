import React from "react";

import "./App.css";
import Navigator from "./components/Navigator";
import { Container } from "reactstrap";
import Footer from "./components/Footer";
import FooterOwner from "./components/FooterOwner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderLogo from "./components/HeaderLogo";

import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <div className="app">
      <Router>
        <Container>
          <HeaderLogo />
        </Container>
        <Navigator />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
        </Switch>
        <FooterOwner />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
