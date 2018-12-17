import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import _ from "lodash";
import DEMO from "./training/demo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], //id: duy nhất, name, status
      isDisplayForm: false,
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

  //Hàm thực thi khi tải lại thì load localStorage vào trong state
  componentWillMount() {
    //Kiểm tra localStorage
    if (localStorage && localStorage.getItem("tasks")) {
      var task = JSON.parse(localStorage.getItem("tasks")); //Chuyển json về object
      this.setState({
        tasks: task
      });
    }
  }

  //Hàm random
  rd() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  //Gen ID
  generateID() {
    return (
      this.rd() +
      this.rd() +
      "-" +
      this.rd() +
      "-" +
      this.rd() +
      "-" +
      this.rd() +
      "-" +
      this.rd() +
      this.rd()
    );
  }

  //Thêm mới công việc
  addNewJob = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  };

  cancelJob = () => {
    this.setState({
      isDisplayForm: false,
      taskEditing: null
    });
  };

  //Nhận giá trị từ TaskForm truyền lên
  onSubmit = data => {
    var { tasks } = this.state;
    //Thêm mới
    if (data.id === "") {
      var task = {
        id: this.generateID(),
        name: data.name,
        status: data.status === "true" ? true : false //Ép kiểu
      };
      tasks.push(task); //Đẩy giá trị mới vào trong tasks
    } else {
      //Sửa
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      isDisplayForm: false,
      taskEditing: null
    });
    //Lưu vào localStore convert sang json để lưu lại
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
    var {
      tasks,
      isDisplayForm,
      taskEditing,
      filter,
      keyword,
      sortBy,
      sortValue
    } = this.state;
    //Filter trên gridview
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter(task => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter(task => {
        if (filter.status === -1) {
          return tasks;
        } else {
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }

    //Filter trên thanh tìm kiếm

    // tasks = tasks.filter(task => { //Filter không dùng lodash
    //   return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // });

    //Filter sử dụng lodash
    tasks = _.filter(tasks, task => {
      return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    //Sắp xếp
    if (sortBy === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) {
          return sortValue;
        } else if (a.name < b.name) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) {
          return -sortValue;
        } else if (a.status < b.status) {
          return sortValue;
        } else {
          return 0;
        }
      });
    }

    var elmTskForm = isDisplayForm ? (
      <TaskForm
        onSubmit={this.onSubmit}
        cancelJob={this.cancelJob}
        taskEditing={taskEditing}
      />
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
              tasks={tasks}
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

export default App;
