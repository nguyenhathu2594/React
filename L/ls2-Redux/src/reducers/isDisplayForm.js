import * as types from "../constants/ActionTypes";

//Tạo State mặc định
var initialState = false; //Đóng form

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      return !state;
    case types.OPEN_FORM:
      return true;
    case types.CLOSE_FORM:
      return false;
    default:
      return state;
  }
};

export default myReducer;
