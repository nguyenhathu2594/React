import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import isEditItem from "./isEditItem";
import isFilterTable from "./isFilterTable";
//Ghép các Reducer lại với nhau
const myReducer = combineReducers({
  tasks, //tasks: tasks(Viết nhanh)
  isDisplayForm,
  isEditItem,
  isFilterTable
});

export default myReducer;
