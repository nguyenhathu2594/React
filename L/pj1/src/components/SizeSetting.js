import React, { Component } from "react";

class SizeS extends Component {
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title"> Size chữ: 15 px </h3>
        </div>
        <div className="panel-body">
          <button type="button" className="btn btn-success">
            Giảm
          </button>
          <button type="button" className="btn btn-success btnTang">
            Tăng
          </button>
        </div>
      </div>
    );
  }
}

export default SizeS;
