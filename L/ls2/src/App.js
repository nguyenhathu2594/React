import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [] //id: duy nhất, name, status
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

  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "Học lập trình",
        status: true
      },
      {
        id: this.generateID(),
        name: "Học bài 1",
        status: false
      },
      {
        id: this.generateID(),
        name: "Học bài 2",
        status: true
      }
    ];
    this.setState({
      tasks: tasks
    });

    //Lưu vào localStore convert sang json để lưu lại
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

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

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
        </div>

        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5" />
              Thêm công việc
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onGenerateData}
            >
              Generate Data
            </button>
            <TaskControl />
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
