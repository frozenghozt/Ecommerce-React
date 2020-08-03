import { combineReducers } from "redux";
import { favorite } from "./reducers/favorite";
import { cart } from "./reducers/cart";

const rootReducer = combineReducers({ favorite, cart });

export default rootReducer;
