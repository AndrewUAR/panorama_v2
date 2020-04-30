import { AUTHENTICATE_USER } from "../constants/auth";
import { SET_ERROR } from "../constants/error";
import { signUpUser, signInUser, signOutUser, updateMyPassword } from "../services/auth.service";

export const createUser = userData => async dispatch => {
  try {
    const res = await signUpUser(userData);
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

export const loginUser = userData => async dispatch => {
  try {
    const res = await signInUser(userData);
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

export const logout = () => async dispatch => {
  try {
    await signOutUser();
  } catch (err) {
    if (err.response.data.message){
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
    }
  }
}

export const updatePassword = userData => async dispatch => {
  try {
    const res = await updateMyPassword(userData);
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

