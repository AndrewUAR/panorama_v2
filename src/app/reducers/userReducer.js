import { createReducer } from '../helper/reducerUtils';
import { GET_ME } from '../constants/user';

const initialState = {
  me: ''
};

const getMe = (state, payload) => {
  return {
    ...state,
    me: payload.user
  };
};

export default createReducer(initialState, {
  [GET_ME]: getMe
});
