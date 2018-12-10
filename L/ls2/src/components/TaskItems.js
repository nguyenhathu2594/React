import React, { Component } from "react";

class TaskItems extends Component {
  onUpdateStatus = () => {
    //Lấy id để truyền lên trên task list sau đó trả về App.js
    this.props.onUpdateStatus(this.props.task.id);
  };
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };
  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };
  render() {
    //Nhận giá trị từ TaskList(2 giá trị)
    var { task, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status ? "label label-success" : "label label-danger"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status ? "Kích hoạt" : "Đóng"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onUpdate}
          >
            <span className="fa fa-pencil mr-5" />
            Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
            <span className="fa fa-trash mr-5" /> Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItems;
