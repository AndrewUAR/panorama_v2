import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducer';
import modalReducer from './modalReducer';
import errorReducer from './errorReducer';
import asyncReducer from './asyncReducer';
import notificationReducer from './notificationReducer';
import albumReducer from './albumReducer';
import photographerReducer from './photographerReducer';
import photographersQueryReducer from './photographersQueryReducer';

import { LOGOUT } from '../constants/auth';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'modal', 'async', 'notifications', 'photographers']
};

const appReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  error: errorReducer,
  async: asyncReducer,
  photographers: photographerReducer,
  notifications: notificationReducer,
  selectedAlbum: albumReducer,
  photographersQuery: photographersQueryReducer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
    localStorage.clear();
  }
  return appReducers(state, action);
};

export default persistReducer(persistConfig, rootReducer);
