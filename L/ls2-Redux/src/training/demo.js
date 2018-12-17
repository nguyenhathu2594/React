import { createStore } from "redux";
import { status, sort } from "./actions/index";

//Tạo Reducer để xử lý
var initialState = {
  status: false,
  sort: {
    by: "name",
    value: 1
  }
};

var myReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_STATUS") {
    state.status = !state.status;
  }
  if (action.type === "SORT") {
    //Tránh trường hợp state cũ bị cập nhật nhưng giá trị mặc định bị thay đổi
    var { by, value } = action.sort; //by = action.sort.by;
    var { status } = state; //status = state.status

    return {
      status: status,
      sort: {
        by: by,
        value: value
      }
    };
  }
  return state;
};

const store = createStore(myReducer); //Khởi tạo Store Redux
console.log("Default: ", store.getState());
//Thực hiện nhiệm vụ gửi về Reducer
// var action = { type: "CHANGE_STATUS" };
store.dispatch(status()); //Dispatcher nhận action

//Thực hiện action có tham số
// var sortAction = {
//   type: "SORT",
//   sort: {
//     by: "name",
//     value: 2
//   }
// };

store.dispatch(
  sort({
    by: "name",
    value: 2
  })
);
console.log(store.getState());

//Sử dụng file index.js ở trong actions như 1 Model trong C#(Tách Action ra để quản lý)
