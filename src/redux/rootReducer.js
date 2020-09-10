import { combineReducers } from "redux";
import { favorite } from "./reducers/favorite";
import { cart } from "./reducers/cart";
import { filter } from "./reducers/filter";

const rootReducer = combineReducers({ favorite, cart, filter });

export default rootReducer;
