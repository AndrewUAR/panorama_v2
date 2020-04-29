import { GET_ME } from "../constants/user";
import { AUTHENTICATE_USER, LOGOUT } from "../constants/auth";
import { getCurrentUser, updateCurrentUser, deleteCurrentUser } from "../services/user.service";

export const getMe = () => async dispatch => {
  try {
    const res = await getCurrentUser();
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: user
    })
  } catch (error) {
    console.log(error)
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
  } catch (error) {
    console.log(error)
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