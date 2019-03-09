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
      this.props.addSmurf(this.state).then(() => {
        this.setState({ name: "", age: "", height: "" }, () =>
          console.log(this.state)
        );
      });
    }
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <input
          type="text"
          name="height"
          placeholder="height"
          onChange={this.handleChange}
          value={this.state.height}
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
