import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
import css from "../App.css";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fave: []
    };
  }

  deleteFave = id => {
    axios.delete(`/api/favorites/${id}`).then(response => {
      this.setState({ fave: response.data });
    });
  };

  componentDidMount() {
    axios.get("/api/favorites").then(response => {
      this.setState({ fave: response.data });
    });
  }

  render() {
    const { fave } = this.state;
    let faveArr = fave.map((val, index) => {
      console.log(val.id);
      return (
        <p className="favorites__quotes" key={index}>
          {val.quote}
          <button
            onClick={() => {
              this.deleteFave(val.id);
            }}
          >
            Remove
          </button>
        </p>
      );
    });

    return (
      <div>
        {faveArr}
        {/* <Footer className="favorites__footer" /> */}
      </div>
    );
  }
}

export default Favorites;
