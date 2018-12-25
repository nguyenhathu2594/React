import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
//Ghép các Reducer lại với nhau
const myReducer = combineReducers({
  tasks, //tasks: tasks(Viết nhanh)
  isDisplayForm
});

export default myReducer;
