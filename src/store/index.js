import { combineReducers, createStore } from "redux";
import { dashboardReducer } from "./dashboard";

const reducersList = { dashboardReducer };

export default createStore(
  combineReducers(reducersList),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
