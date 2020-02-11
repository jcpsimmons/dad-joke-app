import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Joke from "./components/Joke";
import About from "./components/pages/About"

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <div className="container mx-auto">
          <Route path="/" exact component={Joke}></Route>
                 <Route path="/About" exact component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
