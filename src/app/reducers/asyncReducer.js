import { createReducer } from '../helper/reducerUtils';
import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR
} from '../constants/async';

const initialState = {
  loadingGeo: false,
  updating: false,
  fetching: false,
  loading: false,
  uploading: false
};

const asyncActionStarted = (state, payload) => ({
  ...state,
  [payload]: true
});

const asyncActionFinished = (state, payload) => ({
  ...state,
  [payload]: false
});

const asyncActionError = (state, payload) => ({
  ...state,
  [payload]: false
});

export default createReducer(initialState, {
  [ASYNC_ACTION_START]: asyncActionStarted,
  [ASYNC_ACTION_FINISH]: asyncActionFinished,
  [ASYNC_ACTION_ERROR]: asyncActionError
});
