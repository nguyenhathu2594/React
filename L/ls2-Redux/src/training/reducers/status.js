//Tạo Reducer để xử lý
var initialState = false;

var myReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_STATUS") {
    state = !state;
  }
  return state;
};

export default myReducer;
