import { DELETE_ERROR } from "../constants/error";

export const deleteError = () => dispatch => {
  dispatch({
    type: DELETE_ERROR,
    payload: ''
  })
}