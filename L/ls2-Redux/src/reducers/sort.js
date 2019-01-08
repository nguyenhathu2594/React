import * as types from "../constants/ActionTypes";

//Tạo State mặc định
var initialState = {
  by: "name",
  value: 1
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT:
      return {
        by: action.sort.by,
        value: parseInt(action.sort.value, 10)
      };
    default:
      return state;
  }
};

export default myReducer;
