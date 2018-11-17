import React, { Component } from "react";
import TaskItems from "./TaskItems";

class TaskList extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center"> STT </th>
            <th className="text-center"> Tên </th>
            <th className="text-center"> Trạng thái </th>
            <th className="text-center"> Chức năng </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <input type="text" className="form-control" name="fillterName" />
            </td>
            <td>
              <select className="form-control" name="filterStatus">
                <option value={-1}> Tất cả </option>
                <option value={0}> Đóng </option>
                <option value={1}> Kích hoạt </option>
              </select>
            </td>
            <td />
          </tr>
          <TaskItems />
        </tbody>
      </table>
    );
  }
}

export default TaskList;
