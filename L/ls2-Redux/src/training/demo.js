// import { createStore } from "redux";
// import { status, sort } from "./actions/index";
// import myReducer from "./reducers/index";

// const store = createStore(myReducer); //Khởi tạo Store Redux
// console.log("Default: ", store.getState());
// //Thực hiện nhiệm vụ gửi về Reducer
// // var action = { type: "CHANGE_STATUS" };
// store.dispatch(status()); //Dispatcher nhận action

// //Thực hiện action có tham số
// // var sortAction = {
// //   type: "SORT",
// //   sort: {
// //     by: "name",
// //     value: 2
// //   }
// // };

// store.dispatch(
//   sort({
//     by: "name",
//     value: 2
//   })
// );
// console.log(store.getState());

// //Sử dụng file index.js ở trong actions như 1 Model trong C#(Tách Action ra để quản lý)
