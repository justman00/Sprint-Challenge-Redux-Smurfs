import React, { Component } from "react";
import "./App.css";
import { fetchSmurfs } from "../actions";
import { connect } from "react-redux";
import Form from "./Form";
import Smurf from "./Smurf";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = { name: "" };

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    // if (this.props.isLoading) {
    //   return <div>Loading...</div>;
    // }

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        {this.props.smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  isLoading: state.loading
});

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);
