import { AUTHENTICATE_USER, LOGOUT } from "../constants/auth";
import { signUpUser, signInUser, signOutUser } from "../services/auth.service";

export const createUser = userData => async dispatch => {
  try {
    const res = await signUpUser(userData);
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: user
    })
  } catch (err) {
    console.log(err)
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
    console.log(err);
  }
}

export const logout = () => async dispatch => {
  try {
    const res = await signOutUser();
    dispatch({
      type: LOGOUT,
      payload: null
    })
  } catch (error) {
    console.log(error)
  }
}

