import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import * as actions from "./actions/index";

class App extends Component {
  //Thêm mới công việc
  addNewJob = () => {
    var { isEditItem } = this.props;
    if (isEditItem && isEditItem.id !== "") {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: "",
      name: "",
      status: false
    });
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

  render() {
    //Đọc dữ liệu state rồi truyền vào 1 biến task
    var { isDisplayForm } = this.props;

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
            <TaskForm />
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
            <TaskControl />
            {/* Truyền dữ liệu sang TaskList */}
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    isEditItem: state.isEditItem
  };
};

const mapDispathToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onClearTask: task => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
