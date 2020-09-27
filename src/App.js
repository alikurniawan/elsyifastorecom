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
import LoginPage from "./components/LoginPage";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Router>
        <Container>
          <HeaderLogo />
        </Container>
        <div className="mt-4">
          <Navigator />
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/loginpage" component={LoginPage} />
          <Route path="/about" component={About} />
        </Switch>
        <div className="mt-5">
          <FooterOwner />
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
