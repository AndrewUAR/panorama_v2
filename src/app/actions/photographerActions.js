import { SET_ERROR } from "../constants/error";
import { asyncActionStart, asyncActionFinish, asyncActionError } from "./asyncActions";
import { createPhotographerProfile, getPhotographerProfile } from "../services/photographer.service";
import { AUTHENTICATE_USER } from "../constants/auth";

export const createPhotographerProf = (photographerData, history) => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const res = await createPhotographerProfile(photographerData);
    dispatch(asyncActionFinish());
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: {user}
    });
    history.push('/my-profile');
  } catch (err) {
    if (err.response.data.message){
      dispatch(asyncActionError());
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
    }
  }
}

export const getMyPhotographerProfile = () => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const res = await getPhotographerProfile();
    dispatch(asyncActionFinish());
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: {user}
    })
  } catch (err) {
    if (err.response.data.message){
      dispatch(asyncActionError());
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
    }
  }
}