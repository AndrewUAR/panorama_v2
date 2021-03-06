import { SET_ERROR } from '../constants/error';
import { AUTHENTICATE_USER, LOGOUT } from '../constants/auth';
import { updateCurrentUser, deleteCurrentUser } from '../services/user.service';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from './asyncActions';
import { enqueueSnackbar } from './notificationActions';

export const updateMe = (userData) => async (dispatch) => {
  try {
    dispatch(asyncActionStart('updating'));
    const res = await updateCurrentUser(userData);
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: user
    });
    const notification = {
      message: 'Your account was successfully updated',
      options: {
        variant: 'success'
      }
    };
    dispatch(asyncActionFinish('updating'));
    dispatch(enqueueSnackbar(notification));
  } catch (err) {
    if (err.response.data.message) {
      dispatch(asyncActionError('updating'));
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      });
      const notification = {
        message: 'Your account update failed',
        options: {
          variant: 'error'
        }
      };
      dispatch(enqueueSnackbar(notification));
    }
  }
};

export const deleteMe = () => async (dispatch) => {
  try {
    await deleteCurrentUser();
    dispatch({
      type: LOGOUT,
      payload: null
    });
  } catch (error) {
    console.log(error);
  }
};
