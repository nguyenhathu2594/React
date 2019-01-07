import React, { Component } from "react";
import TaskItems from "./TaskItems";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

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
    var value = target.type === "checkbox" ? target.checked : target.value;
    var filter = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus
    };
    this.props.onFilterTable(filter);
    this.setState({
      [name]: value
    });
  };
  render() {
    //Nhận giá trị truyền từ App sang bằng gọi props
    var { tasks, isFilterTable } = this.props;
    //Filter trên gridview
    if (isFilterTable) {
      if (isFilterTable.name) {
        tasks = tasks.filter(task => {
          return task.name.toLowerCase().indexOf(isFilterTable.name) !== -1;
        });
      }
      tasks = tasks.filter(task => {
        if (isFilterTable.status === -1) {
          return tasks;
        } else {
          return task.status === (isFilterTable.status === 1 ? true : false);
        }
      });
    }
    //Đọc dữ liệu bằng for trong tasks
    var elmTasks = tasks.map((task, index) => {
      return <TaskItems key={task.id} index={index + 1} task={task} />;
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
                value={this.state.filterName}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={this.state.filterStatus}
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
  return {
    tasks: state.tasks,
    isFilterTable: state.isFilterTable
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: filter => {
      dispatch(actions.filterTask(filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
