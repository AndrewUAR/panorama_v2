import _ from "lodash";
import { createReducer } from "../helper/reducerUtils";
import { GET_ME, UPDATE_ME, DELETE_ME } from "../constants/user";
import { AUTHENTICATE_USER } from "../constants/auth";

const initialState = {
  me: ''
}

const getMe = (state, payload) => {
  return {
    ...state,
    me: payload.user
  }
}

export default createReducer(initialState, {
  [GET_ME]: getMe
})
