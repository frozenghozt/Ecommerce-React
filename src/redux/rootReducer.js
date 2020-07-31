import { combineReducers } from "redux";
import { favorite } from "./reducers/productRed";

const rootReducer = combineReducers({ favorite });

export default rootReducer;
