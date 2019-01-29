import React, { Component } from "react";
import Header from "./shared/component/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container" />
      </div>
    );
  }
}

export default App;
