import React, { Component } from "react";

class SizeS extends Component {
  changeSize(value) {
    this.props.onReceiveSize(value);
  }

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title"> Size chữ: {this.props.fontSize} px </h3>
        </div>
        <div className="panel-body">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.changeSize(-2)}
          >
            Giảm
          </button>
          <button
            type="button"
            className="btn btn-success btnTang"
            onClick={() => this.changeSize(2)}
          >
            Tăng
          </button>
        </div>
      </div>
    );
  }
}

export default SizeS;
