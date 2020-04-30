import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authReducer";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";

import { LOGOUT } from "../constants/auth";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['error', 'modal']
};

const appReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  me: userReducer,
  error: errorReducer
});



const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
    localStorage.clear();
  }
  return appReducers(state, action);
};

export default persistReducer(persistConfig, rootReducer);
