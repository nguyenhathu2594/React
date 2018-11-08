import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" />
        </div>
      </div>
    );
  }
}

export default App;
