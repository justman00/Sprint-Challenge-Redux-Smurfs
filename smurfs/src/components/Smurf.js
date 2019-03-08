import React from "react";
import { editSmurf, deleteSmurf } from "../actions";
import { connect } from "react-redux";

class Smurf extends React.Component {
  state = {
    name: this.props.smurf.name,
    edit: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editSmurf(this.props.smurf.id, this.state.name).then(() => {
      this.setState({ edit: !this.state.edit });
    });
  };

  render() {
    if (this.state.edit) {
      return (
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={e => this.setState({ name: e.target.value })}
            value={this.state.name}
          />
          <button>Finish edit</button>
        </form>
      );
    }

    return (
      <div>
        {this.props.smurf.name}{" "}
        <button onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>
          Delete
        </button>
        <button onClick={() => this.setState({ edit: true })}>
          Edit smurf
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { editSmurf, deleteSmurf }
)(Smurf);
