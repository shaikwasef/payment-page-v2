import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

export default combineReducers({ counterReducer, cakeReducer, userReducer });
