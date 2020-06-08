import React, { Component } from "react";
import Palette from "../components/palette";

class App extends Component {
  render() {
    return (
      <div className="App">
        <span className="overlay">Press Spacebar</span>
        <Palette />
      </div>
    );
  }
}

export default App;
