import React, { Component } from "react";
import axios from "axios";

class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      quote: "",
      likes: 0
    };
  }
  handleAdd = e => {
    this.setState({ [e.target.value]: e.target.value });
  };

  // componentDidMount() {
  //   axios.post("/api/quotes").then(response => {});
  // }

  render() {
    return (
      <form>
        <input type="stress" quote="quote" onChange={this.handleAdd} />
      </form>
    );
  }
}

export default AddQuote;
