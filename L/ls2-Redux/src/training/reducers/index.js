import myStatus from "./status";
import mySort from "./sort";
import { combineReducers } from "redux"; //Gộp Reducer

const myReducer = combineReducers({
  status: myStatus,
  sort: mySort
});

export default myReducer;
