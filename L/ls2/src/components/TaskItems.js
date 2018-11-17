import React, { Component } from "react";

class TaskItems extends Component {
  render() {
    return (
      <tr>
        <td className="text-center">1</td>
        <td>Học angular 4</td>
        <td className="text-center">
          <span className="label label-primary"> Kích hoạt</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-5" />
            Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            <span className="fa fa-trash mr-5" /> Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItems;
