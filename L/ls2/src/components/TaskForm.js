import React, { Component } from "react";

class TaskForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Thêm công việc</h3>
              <span className="fa fa-times-circle text-right" />
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <label>Tên: </label>
                  <input type="text" className="form-control" name="name" />
                </div>
                <label>Trạng thái:</label>
                <select className="form-control" name="status">
                  <option value={true}>Kích hoạt</option>
                  <option value={false}>Đóng</option>
                </select>
                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-warning">
                    <span className="fa fa-plus mr-5" />
                    Lưu lại
                  </button>
                  &nbsp;
                  <button type="submit" className="btn btn-danger">
                    <span className="fa fa-close mr-5" />
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskForm;
