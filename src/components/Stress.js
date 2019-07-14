import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
import "../App.css";

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
    axios.put(`/api/quotes/${id}`).then(() => this.getAllQuotes());
  };

  // let elements =

  // gridview = () => {
  //   i;
  //   for(let i = 0; i < elements.length; i++) {
  //     elements[i].style.width = "50%";
  //   }
  // }

  componentDidMount() {
    this.getAllQuotes();
    // this.setState({ allCollect: response.data });
  }
  getAllQuotes = () => {
    axios
      .get("/api/quotes/stress")
      .then(response => {
        console.log(response);
        this.setState({ stressCollect: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("/api/quotes/inspirational")
      .then(response => {
        console.log(response);
        this.setState({ inspirationalCollect: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("/api/quotes/intellectual")
      .then(response => {
        console.log(response);
        this.setState({ intellectualCollect: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

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
        <div>
          <p className="quotes" key={index}>
            {val.quote}
            <button
              className="right__buttons"
              onClick={() => {
                axios.post("/api/favorites", val);
              }}
            >
              Keep!
            </button>
            {collect[index].likes}
            <button
              className="right__buttons"
              onClick={() => this.likeQuote(val.id)}
            >
              Like
            </button>
          </p>
        </div>
      );
    });
    return <div className="row">{collectDisplay}</div>;
  }
}

export default Stress;
