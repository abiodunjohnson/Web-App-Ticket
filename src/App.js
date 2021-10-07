import React from "react";
// import Navbar from "./Components/Navbar";
import Event from "./pages/event/event";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Payment from "./pages/payment/payment";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/event/:id" exact component={Event} />
            <Route path="/payment" exact component={Payment} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
