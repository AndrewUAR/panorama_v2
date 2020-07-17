import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR
} from '../constants/async';

export const asyncActionStart = (payload) => ({
  type: ASYNC_ACTION_START,
  payload
});

export const asyncActionFinish = (payload) => ({
  type: ASYNC_ACTION_FINISH,
  payload
});

export const asyncActionError = (payload) => ({
  type: ASYNC_ACTION_ERROR,
  payload
});
