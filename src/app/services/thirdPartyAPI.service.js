import axios from 'axios';
import { apiEndPoint } from '../../config.js';
import { store } from '../store/store';
import { asyncActionStart, asyncActionFinish } from '../actions/asyncActions';

const API_ENDPOINT = apiEndPoint();

export const getPlaces = async (place) => {
  store.dispatch(asyncActionStart('loadingGeo'));
  const response = await axios.post(
    `${API_ENDPOINT}/api/v1/data/getPlaces`,
    place
  );
  store.dispatch(asyncActionFinish('loadingGeo'));
  return response;
};

export const getMyPlace = async (coordinates) => {
  store.dispatch(asyncActionStart('loadingGeo'));
  const response = await axios.post(
    `${API_ENDPOINT}/api/v1/data/getMyPlace`,
    coordinates
  );
  store.dispatch(asyncActionFinish('loadingGeo'));
  return response;
};
