import { SET_ERROR } from "../constants/error";
import { AUTHENTICATE_USER, LOGOUT } from "../constants/auth";
import { getCurrentUser, updateCurrentUser, deleteCurrentUser } from "../services/user.service";
import { enqueueSnackbar } from '../actions/notificationActions';

export const getMe = () => async dispatch => {
  try {
    const res = await getCurrentUser();
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: user
    })
  } catch (err) {
    if (err.response.data.message){
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
    }
  }
}

export const updateMe = userData => async dispatch => {
  try {
    const res = await updateCurrentUser(userData);
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: user
    })
    const notification = {
      message: 'Your account was successfully updated',
      options: {
        variant: 'success'
      }
    };
    dispatch(enqueueSnackbar(notification));
  } catch (err) {
    if (err.response.data.message){
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
      const notification = {
        message: 'Your account update failed',
        options: {
          variant: 'error'
        }
      };
      dispatch(enqueueSnackbar(notification));
    }
  }
}

export const deleteMe = () => async dispatch => {
  try {
    await deleteCurrentUser();
    dispatch({
      type: LOGOUT,
      payload: null
    })
  } catch (error) {
    console.log(error)
  }
}