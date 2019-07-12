import React, { Component } from "react";
import axios from "axios";

class Stress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stressCollect: [],
      inspirationalCollect: [],
      intellectualCollect: []
    };
  }

  likeQuote = id => {
    axios.put(`/api/quotes/${id}`).then(response => {});
  };

  componentDidMount() {
    axios
      .get("/api/quotes/stress")
      .then(response => {
        console.log(response);
        this.setState({ stressCollect: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "SORRY BUT ERROR"
        });
      });
    axios.get("/api/quotes/inspirational").then(response => {
      console.log(response);
      this.setState({ inspirationalCollect: response.data });
    });
    axios.get("/api/quotes/intellectual").then(response => {
      console.log(response);
      this.setState({ intellectualCollect: response.data });
    });
    axios.get("/api/quotes/").then(response => {
      this.setState({ allCollect: response.data });
    });
  }

  render() {
    const {
      stressCollect,
      inspirationalCollect,
      intellectualCollect
    } = this.state;
    let collect;
    if (this.props.type === "stress") {
      collect = stressCollect;
    } else if (this.props.type === "inspirational") {
      collect = inspirationalCollect;
    } else if (this.props.type === "intellectual") {
      collect = intellectualCollect;
    }
    let collectDisplay = collect.map((val, index) => {
      return (
        <p key={index}>
          {val.quote}
          <button
            onClick={() => {
              axios.post("/api/favorites", val);
            }}
          >
            Keep!
          </button>
          {collect[index].likes}
          <button onClick={() => this.likeQuote(val.id)}>Like</button>
        </p>
      );
    });
    return <div>{collectDisplay}</div>;
  }
}

export default Stress;
