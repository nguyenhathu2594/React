import * as types from "../constants/ActionTypes";

//Tạo State mặc định
var initialState = {};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TASK:
      return action.task;
    default:
      return state;
  }
};

export default myReducer;
