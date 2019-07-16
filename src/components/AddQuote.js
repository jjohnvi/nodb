import React, { Component } from "react";
import axios from "axios";

class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      quote: ""
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  submitHandler = e => {
    e.preventDefault();
    axios
      .post("/api/quotes/", {
        type: this.state.type,
        quote: this.state.quote
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleAdd = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // componentDidMount() {
  //   axios.post("/api/quotes").then(response => {});
  // }

  render() {
    return (
      <div>
        <div>
          <input name="type" onChange={this.handleAdd} />
          <input name="quote" onChange={this.handleAdd} />
          <button className="submit" onClick={this.submitHandler} />
        </div>
      </div>
    );
  }
}

export default AddQuote;
