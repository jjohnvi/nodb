import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import Stress from "./components/Stress";
import Header from "./components/Header";
import Favorites from "./components/Favorites";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Home"
    };
  }

  viewChange = viewParam => {
    this.setState({ view: viewParam });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <nav>
          <button onClick={() => this.viewChange("Stress")}>Stress</button>
          <button onClick={() => this.viewChange("Inspirational")}>
            Inspirational
          </button>
          <button onClick={() => this.viewChange("Intellectual")}>
            Intellectual
          </button>
          <button onClick={() => this.viewChange("Favorites")}>
            Favorites
          </button>
        </nav>
        {this.state.view === "Stress" ? <Stress type={"stress"} /> : null}
        {this.state.view === "Inspirational" ? (
          <Stress type={"inspirational"} />
        ) : null}
        {this.state.view === "Intellectual" ? (
          <Stress type={"intellectual"} />
        ) : null}
        {this.state.view === "Favorites" ? (
          <Favorites type={"favorites"} />
        ) : null}
      </div>
    );
  }
}

export default App;
