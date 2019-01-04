import * as types from "./../constants/ActionTypes";
import _ from "lodash";
//Hàm random
var rd = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

//Gen ID
var generateID = () => {
  return rd() + rd() + "-" + rd() + "-" + rd() + "-" + rd() + "-" + rd() + rd();
};

var data = JSON.parse(localStorage.getItem("tasks"));
//Tạo State mặc định
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
  var id = "";
  var index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      var newTask = {
        id: generateID(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS:
      id = action.id;
      index = _.findIndex(state, task => {
        return task.id === id;
      });
      //Clone lại giá trị cũ để thay đổi(Không cập nhật được view)
      state[index] = {
        ...state[index], //Copy lại giá trị cũ ở vị trí index
        status: !state[index].status //Lấy giá trị ngược lại của bản ghi cũ gán cho status mới
      };
      //Lưu vào localStore convert sang json để lưu lại
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.DELETE_ITEM:
      id = action.id;
      index = _.findIndex(state, task => {
        return task.id === id;
      });
      state.splice(index, 1);
      //Lưu vào localStore convert sang json để lưu lại
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
