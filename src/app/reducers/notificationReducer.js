import _ from 'lodash';
import { createReducer } from '../helper/reducerUtils';
import {
  ENQUEUE_SNACKBAR,
  CLOSE_SNACKBAR,
  REMOVE_SNACKBAR
} from '../constants/notification';

const initialState = {
  notifications: []
};

const enqueueSnackbar = (state, payload) => {
  return {
    ...state,
    notifications: [
      ...state.notifications,
      {
        key: payload.key,
        ...payload.notification
      }
    ]
  };
};

const closeSnackbar = (state, payload) => {
  return {
    ...state,
    notifications: state.notifications.map((notification) =>
      payload.dismissAll || notification.key === payload.key
        ? { ...notification, dismissed: true }
        : { ...notification }
    )
  };
};

const removeSnackbar = (state, payload) => {
  return {
    ...state,
    notifications: _.filter(
      state.notifications,
      (notification) => notification.key !== payload.key
    )
  };
};

export default createReducer(initialState, {
  [ENQUEUE_SNACKBAR]: enqueueSnackbar,
  [CLOSE_SNACKBAR]: closeSnackbar,
  [REMOVE_SNACKBAR]: removeSnackbar
});
