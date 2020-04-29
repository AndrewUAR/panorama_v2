import { AUTHENTICATE_USER, LOGOUT } from "../constants/auth";
import { SET_ERROR, DELETE_ERROR } from "../constants/error";
import { signUpUser, signInUser, signOutUser, updateMyPassword } from "../services/auth.service";

export const createUser = userData => async dispatch => {
  try {
    const res = await signUpUser(userData);
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: user
    })

    dispatch({
      type: DELETE_ERROR,
      payload: null
    })

  } catch (err) {
    if (err.response.data.message){
      dispatch({
        type: SET_ERROR,
        payload: {registerError: err.response.data.message}
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

    dispatch({
      type: DELETE_ERROR,
      payload: null
    })
  } catch (err) {
    if (err.response.data.message){
      dispatch({
        type: SET_ERROR,
        payload: {loginError: err.response.data.message}
      })
    }
  }
}

export const logout = () => async dispatch => {
  try {
    const res = await signOutUser();
    dispatch({
      type: LOGOUT,
      payload: null
    })
  } catch (err) {
    if (err.response.data.message){
      dispatch({
        type: SET_ERROR,
        payload: {logoutError: err.response.data.message}
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

    dispatch({
      type: DELETE_ERROR,
      payload: null
    })
  } catch (err) {
    if (err.response.data.message){
      dispatch({
        type: SET_ERROR,
        payload: {updatePasswordError: err.response.data.message}
      })
    }
  }
}

