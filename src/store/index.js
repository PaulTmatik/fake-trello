import { combineReducers, createStore } from "redux";
import { dashboardReducer } from "./dashboard";
import { authReducer } from "./auth";

const reducersList = { dashboardReducer, authReducer };

export default createStore(
  combineReducers(reducersList),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
