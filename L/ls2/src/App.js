import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], //id: duy nhất, name, status
      isDisplayForm: false
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

  // onGenerateData = () => {
  //   var tasks = [
  //     {
  //       id: this.generateID(),
  //       name: "Học lập trình",
  //       status: true
  //     },
  //     {
  //       id: this.generateID(),
  //       name: "Học bài 1",
  //       status: false
  //     },
  //     {
  //       id: this.generateID(),
  //       name: "Học bài 2",
  //       status: true
  //     }
  //   ];
  //   this.setState({
  //     tasks: tasks
  //   });

  //   //Lưu vào localStore convert sang json để lưu lại
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

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
      isDisplayForm: false
    });
  };

  //Nhận giá trị từ TaskForm truyền lên
  onSubmit = data => {
    var task = {
      id: this.generateID(),
      name: data.name,
      status: data.status === "true" ? true : false //Ép kiểu
    };
    var { tasks } = this.state;
    tasks.push(task); //Đẩy giá trị mới vào trong tasks
    this.setState({
      tasks: tasks,
      isDisplayForm: false
    });
    //Lưu vào localStore convert sang json để lưu lại
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  onUpdateStatus = id => {
    var item = this.findIndex(id);
    if (item !== -1) {
      var { tasks } = this.state;
      tasks[item].status = !tasks[item].status;
      this.setState({
        tasks: tasks
      });
      //Lưu vào localStore convert sang json để lưu lại
      localStorage.setItem("tasks", JSON.stringify(tasks));
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

  render() {
    //Đọc dữ liệu state rồi truyền vào 1 biến task
    var { tasks, isDisplayForm } = this.state;
    var elmTskForm = isDisplayForm ? (
      <TaskForm onSubmit={this.onSubmit} cancelJob={this.cancelJob} />
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
            <TaskControl />
            {/* Truyền dữ liệu sang TaskList */}
            <TaskList tasks={tasks} onUpdateStatus={this.onUpdateStatus} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
