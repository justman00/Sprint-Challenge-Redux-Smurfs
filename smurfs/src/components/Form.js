import React, { Component } from "react";
import { addSmurf } from "../actions";
import { connect } from "react-redux";

class Form extends Component {
  state = { name: "", age: "", height: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (parseInt(this.state.age)) {
      this.props.addSmurf(this.state);
      this.setState({ name: "", age: "", height: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="height"
          placeholder="height"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(Form);
