import _ from "lodash";
import { createReducer } from "../helper/reducerUtils";
import { AUTHENTICATE_USER } from "../constants/auth";


const initialState = {
  authenticated: false,
  authUser: ''
}

const authenticateUser = (state, payload) => {
  return {
    ...state,
    authenticated: !_.isEmpty(payload),
    authUser: payload.user
  }
}

export default createReducer(initialState, {
  [AUTHENTICATE_USER]: authenticateUser
})