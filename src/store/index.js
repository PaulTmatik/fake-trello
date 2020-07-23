import { combineReducers, createStore } from "redux";
import { dashboardReducer } from "./dashboard";

const reducersList = {dashboardReducer};

export default createStore(combineReducers(reducersList));
