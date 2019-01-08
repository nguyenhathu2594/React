import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import isEditItem from "./isEditItem";
import isFilterTable from "./isFilterTable";
import search from "./search";
import sort from "./sort";
//Ghép các Reducer lại với nhau
const myReducer = combineReducers({
  tasks, //tasks: tasks(Viết nhanh)
  isDisplayForm,
  isEditItem,
  isFilterTable,
  search,
  sort
});

export default myReducer;
