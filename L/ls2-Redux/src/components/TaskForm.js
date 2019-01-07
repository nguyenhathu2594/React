import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false
    };
  }

  componentWillMount() {
    if (this.props.isEditItem) {
      this.setState({
        id: this.props.isEditItem.id,
        name: this.props.isEditItem.name,
        status: this.props.isEditItem.status
      });
    } else {
      this.onClear();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.isEditItem) {
      this.setState({
        id: nextProps.isEditItem.id,
        name: nextProps.isEditItem.name,
        status: nextProps.isEditItem.status
      });
    } else {
      this.onClear();
    }
  }

  onClear = () => {
    this.setState({
      id: "",
      name: "",
      status: false
    });
  };

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
    this.cancelJob();
  };

  cancelJob = () => {
    this.props.onCloseForm();
  };
  render() {
    if (!this.props.isDisplayForm) {
      return null;
    }
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {!this.state.id ? "Thêm công việc" : "Sửa công việc"}
            <span
              className="fa fa-times-circle text-right"
              onClick={this.cancelJob}
            />
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label> Tên: </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label> Trạng thái: </label>
            <select
              className="form-control"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}> Kích hoạt </option>
              <option value={false}> Đóng </option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="fa fa-plus mr-5" />
                Lưu lại
              </button>
              &nbsp;
              <button
                type="submit"
                className="btn btn-danger"
                onClick={this.cancelJob}
              >
                <span className="fa fa-close mr-5" />
                Hủy
              </button>
            </div>
          </form>
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: task => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
