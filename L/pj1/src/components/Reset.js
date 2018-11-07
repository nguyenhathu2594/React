import React, { Component } from "react";

class Reset extends Component {
  resetAll() {
    this.props.onReceiveColor("red");
    this.props.onResetSize(12);
  }
  render() {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => this.resetAll()}
      >
        Reset
      </button>
    );
  }
}

export default Reset;
