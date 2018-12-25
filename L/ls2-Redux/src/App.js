import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import _ from "lodash";
import { connect } from "react-redux";
import * as actions from "./actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing: null,
      filter: {
        name: "",
        status: -1
      },
      keyword: "",
      sortBy: "name",
      sortValue: 1
    };
  }

  //Thêm mới công việc
  addNewJob = () => {
    this.props.onToggleForm();
  };

  cancelJob = () => {
    this.props.onToggleForm();
  };

  onUpdateStatus = id => {
    var { tasks } = this.state;
    //var item = this.findIndex(id); //Sử dụng tự thiết kế
    //Sử dụng lodash
    var item = _.findIndex(tasks, task => {
      return task.id === id;
    });
    if (item !== -1) {
      tasks[item].status = !tasks[item].status;
      this.setState({
        tasks: tasks
      });
      //Lưu vào localStore convert sang json để lưu lại
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  onDelete = id => {
    var { tasks } = this.state;
    var item = this.findIndex(id);
    if (item !== -1) {
      tasks.splice(item, 1);
      this.setState({
        tasks: tasks
      });
      //Lưu vào localStore convert sang json để lưu lại
      localStorage.setItem("tasks", JSON.stringify(tasks));

      //Đóng form thêm mới
      this.cancelJob();
    }
  };

  onUpdate = id => {
    var { tasks } = this.state;
    var item = this.findIndex(id);
    var taskEditing = tasks[item];
    if (item !== -1) {
      this.setState({
        taskEditing: taskEditing
      });
      this.addNewJob();
    }
  };

  //Tìm giá trị
  findIndex = id => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  };

  onSearch = kw => {
    this.setState({
      keyword: kw
    });
  };

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
  };
  render() {
    //Đọc dữ liệu state rồi truyền vào 1 biến task
    var { taskEditing, filter, keyword, sortBy, sortValue } = this.state;
    var { isDisplayForm } = this.props;
    //Filter trên gridview
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter(task => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
    //   tasks = tasks.filter(task => {
    //     if (filter.status === -1) {
    //       return tasks;
    //     } else {
    //       return task.status === (filter.status === 1 ? true : false);
    //     }
    //   });
    // }

    //Filter trên thanh tìm kiếm

    // tasks = tasks.filter(task => { //Filter không dùng lodash
    //   return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // });

    //Filter sử dụng lodash
    // tasks = _.filter(tasks, task => {
    //   return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // });

    // //Sắp xếp
    // if (sortBy === "name") {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) {
    //       return sortValue;
    //     } else if (a.name < b.name) {
    //       return -sortValue;
    //     } else {
    //       return 0;
    //     }
    //   });
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) {
    //       return -sortValue;
    //     } else if (a.status < b.status) {
    //       return sortValue;
    //     } else {
    //       return 0;
    //     }
    //   });
    // }

    var elmTskForm = isDisplayForm ? (
      <TaskForm cancelJob={this.cancelJob} taskEditing={taskEditing} />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
        </div>

        <div className="row">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {elmTskForm}
          </div>

          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addNewJob}
            >
              <span className="fa fa-plus mr-5" />
              Thêm công việc
            </button>
            {/* &nbsp;
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onGenerateData}
            >
              Generate Data
            </button> */}
            <TaskControl onSearch={this.onSearch} onSort={this.onSort} />
            {/* Truyền dữ liệu sang TaskList */}
            <TaskList
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm
  };
};

const mapDispathToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
