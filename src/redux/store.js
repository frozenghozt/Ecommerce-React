import { createStore, compose } from "redux";
import { throttle } from "lodash";
import { loadState, saveState } from "../Funcs/localStorage";
import rootReducer from "./rootReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const persistedState = loadState();
export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers()
);

store.subscribe(
  throttle(() => {
    saveState({
      favorite: store.getState().favorite,
      cart: store.getState().cart,
    });
  }, 1000)
);
