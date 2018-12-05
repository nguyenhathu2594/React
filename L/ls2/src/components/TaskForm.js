import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: false
    };
  }

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
    this.props.onSubmit(this.state);
  };

  cancelJob = () => {
    this.props.cancelJob();
  };
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Thêm công việc
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

export default TaskForm;
