import { AUTHENTICATE_USER, LOGOUT } from '../constants/auth';
import { SET_ERROR } from '../constants/error';
import { enqueueSnackbar } from '../actions/notificationActions';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from './asyncActions';
import {
  signUpUser,
  signInUser,
  signOutUser,
  updateMyPassword,
  forgotPassword,
  resetMyPassword,
  confirmMyEmail
} from '../services/auth.service';

export const createUser = (userData, history) => async (dispatch) => {
  try {
    dispatch(asyncActionStart());
    await signUpUser(userData);
    dispatch(asyncActionFinish());
    const notification = {
      message:
        'Your account was successfully created. Please verify your email.',
      options: {
        variant: 'success'
      }
    };
    dispatch(enqueueSnackbar(notification));
    history.push('/');
  } catch (err) {
    if (err.response.data.message) {
      dispatch(asyncActionError());
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      });
    }
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch(asyncActionStart());
    const res = await signInUser(userData);
    dispatch(asyncActionFinish());

    const user = res.data.data;

    dispatch({
      type: AUTHENTICATE_USER,
      payload: user
    });

    const notification = {
      message: 'Log in successfully',
      options: {
        variant: 'success'
      }
    };

    dispatch(enqueueSnackbar(notification));
  } catch (err) {
    if (err.response.data.message) {
      dispatch(asyncActionError());
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      });
    }
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOutUser();
    dispatch({
      type: LOGOUT,
      payload: null
    });
  } catch (err) {
    if (err.response.data.message) {
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      });
    }
  }
};

export const updatePassword = (userData) => async (dispatch) => {
  try {
    const res = await updateMyPassword(userData);
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: user
    });

    const notification = {
      message: 'Your password was successfully updated',
      options: {
        variant: 'success'
      }
    };
    dispatch(enqueueSnackbar(notification));
  } catch (err) {
    if (err.response.data.message) {
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      });

      const notification = {
        message: 'Your password update failed',
        options: {
          variant: 'error'
        }
      };
      dispatch(enqueueSnackbar(notification));
    }
  }
};

export const forgotMyPassword = (userData) => async (dispatch) => {
  try {
    dispatch(asyncActionStart());
    await forgotPassword(userData);
    dispatch(asyncActionFinish());
    const notification = {
      message: 'Reset link was sent to your email!',
      options: {
        variant: 'info'
      }
    };
    dispatch(enqueueSnackbar(notification));
  } catch (err) {
    if (err.response.data.message) {
      dispatch(asyncActionError());
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      });
    }
  }
};

export const resetPassword = (userData, token) => async (dispatch) => {
  try {
    const res = await resetMyPassword(userData, token);
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: user
    });
    const notification = {
      message: 'Your password was successfully reset',
      options: {
        variant: 'success'
      }
    };
    dispatch(enqueueSnackbar(notification));
  } catch (err) {
    if (err.response.data.message) {
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      });
    }
  }
};

export const confirmEmail = (id, history) => async (dispatch) => {
  try {
    dispatch(asyncActionStart());
    await confirmMyEmail(id);
    dispatch(asyncActionFinish());
    const notification = {
      message:
        'Your email was successfully confirmed. Please proceed to login.',
      options: {
        variant: 'success'
      }
    };
    dispatch(enqueueSnackbar(notification));
    history.push('/login');
  } catch (err) {
    if (err.response.data.message) {
      const notification = {
        message: 'Your account has been already activated.',
        options: {
          variant: 'warning'
        }
      };
      dispatch(enqueueSnackbar(notification));
      history.push('/login');
    }
  }
};
