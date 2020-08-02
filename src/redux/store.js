import { createStore } from "redux";
import { throttle } from "lodash";
import { loadState, saveState } from "../Funcs/localStorage";
import rootReducer from "./rootReducer";

const persistedState = loadState();
export const store = createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      favorite: store.getState().favorite,
    });
  }, 1000)
);
