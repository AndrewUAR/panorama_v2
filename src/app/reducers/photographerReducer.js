import { createReducer } from '../helper/reducerUtils';
import {
  GET_ALL_PHOTOGRAPHERS,
  SELECT_PHOTOGRAPHER
} from '../constants/photographer';

const initialState = {
  photographers: [],
  results: 0,
  selectedPhotographer: {}
};

const getPhotographers = (state, payload) => ({
  ...state,
  photographers: payload.photographers,
  results: payload.results
});

const selectedPhotographer = (state, payload) => ({
  ...state,
  selectedPhotographer: payload
});

export default createReducer(initialState, {
  [GET_ALL_PHOTOGRAPHERS]: getPhotographers,
  [SELECT_PHOTOGRAPHER]: selectedPhotographer
});
