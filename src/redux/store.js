import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import donorSearchReducer from "./reducers/donorSearchReducer";
import authReducer from "./reducers/authReducer";

export const store = createStore(
    combineReducers({
      donorSearchReducer,
      authReducer
    }),
    applyMiddleware(thunk)
  );