import { createReducer } from "../helper/reducerUtils";
import { SET_ERROR, DELETE_ERROR } from '../constants/error';

const initialState = {
  error: ''
};

const setError = (state, payload) => {
  return {
    ...state,
    error: payload
  }
}

const deleteError = (state, payload) => {
  return {
    ...state,
    error: payload
  }
}

export default createReducer(initialState, {
  [SET_ERROR]: setError,
  [DELETE_ERROR]: deleteError
})