import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import Stress from "./components/Stress";
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import AddQuote from "./components/AddQuote";
import Footer from "./components/Footer";
import "./App.css";

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

  viewHome = () => {
    this.setState({ view: "Home" });
  };

  render() {
    return (
      <div className="App">
        <Header viewHome={this.viewHome} />
        <nav className="Navbar">
          <button
            className="nav__buttons"
            onClick={() => this.viewChange("Stress")}
          >
            Stress
          </button>
          <button
            className="nav__buttons"
            onClick={() => this.viewChange("Inspirational")}
          >
            Inspirational
          </button>
          <button
            className="nav__buttons"
            onClick={() => this.viewChange("Intellectual")}
          >
            Intellectual
          </button>
          <button
            className="nav__buttons"
            onClick={() => this.viewChange("Favorites")}
          >
            Favorites
          </button>
        </nav>
        <div>
          <AddQuote />
        </div>
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

        <Footer />
      </div>
    );
  }
}

export default App;
