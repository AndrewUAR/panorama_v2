import _ from 'lodash';
import { SET_ERROR } from '../constants/error';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from './asyncActions';
import {
  createPhotographerProfile,
  getPhotographerProfile,
  getAllPhotographers
} from '../services/photographer.service';
import { AUTHENTICATE_USER } from '../constants/auth';
import { GET_ALL_PHOTOGRAPHERS } from '../constants/photographer';
export const createPhotographerProf = (photographerData, history) => async (
  dispatch
) => {
  try {
    dispatch(asyncActionStart());
    const res = await createPhotographerProfile(photographerData);
    dispatch(asyncActionFinish());
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: { user }
    });
    history.push('/my-profile');
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

export const getMyPhotographerProfile = () => async (dispatch) => {
  try {
    dispatch(asyncActionStart());
    const res = await getPhotographerProfile();
    dispatch(asyncActionFinish());
    const user = res.data.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: { user }
    });
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

export const getPhotographers = (query) => async (dispatch) => {
  try {
    dispatch(asyncActionStart());
    const res = await getAllPhotographers(query);
    let response = res.data.data;
    let payload = {};
    if (_.isEmpty(response)) {
      payload['results'] = 0;
      payload['photographers'] = [];
    } else {
      payload = res.data.data[0];
    }
    dispatch({
      type: GET_ALL_PHOTOGRAPHERS,
      payload: payload
    });
    dispatch(asyncActionFinish());
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
