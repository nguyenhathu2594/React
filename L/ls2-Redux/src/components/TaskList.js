import React, { Component } from "react";
import TaskItems from "./TaskItems";
import { connect } from "react-redux";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1 //All:-1, active: 1, deactive: 0
    };
  }

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value
    });
  };
  render() {
    //Nhận giá trị truyền từ App sang bằng gọi props
    var { tasks } = this.props;

    var { filterName, filterStatus } = this.state;
    //Đọc dữ liệu bằng for trong tasks
    var elmTasks = tasks.map((task, index) => {
      return (
        <TaskItems
          onUpdateStatus={this.props.onUpdateStatus}
          onDelete={this.props.onDelete}
          onUpdate={this.props.onUpdate}
          key={task.id}
          index={index}
          task={task}
        />
      );
    });
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
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={filterName}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChange}
              >
                <option value={-1}> Tất cả </option>
                <option value={0}> Đóng </option>
                <option value={1}> Kích hoạt </option>
              </select>
            </td>
            <td />
          </tr>
          {elmTasks}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

export default connect(
  mapStateToProps,
  null
)(TaskList);
