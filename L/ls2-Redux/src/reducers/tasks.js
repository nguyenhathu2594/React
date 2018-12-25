import * as types from "./../constants/ActionTypes";

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
    default:
      return state;
  }
};

export default myReducer;
