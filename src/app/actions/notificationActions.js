import cuid from 'cuid';
import { ENQUEUE_SNACKBAR, CLOSE_SNACKBAR, REMOVE_SNACKBAR} from '../constants/notification.js';

export const enqueueSnackbar = (notification) => dispatch => {
  dispatch({
    type: ENQUEUE_SNACKBAR,
    payload: {
      key: cuid(),
      notification
    }
  });
};

export const closeSnackbar = (key) => dispatch => {
  dispatch({
    type: CLOSE_SNACKBAR,
    payload: {
      dismissALL: !key,
      key
    }
  })
};

export const removeSnackbar = (key) => dispatch => {
  dispatch({
    type: REMOVE_SNACKBAR,
    payload: {key}
  })
};