import { createReducer } from "../helper/reducerUtils";
import { 
  // CREATE_ALBUM, 
  GET_ALBUM, 
  // GET_ALL_ALBUMS, 
  UPDATE_ALBUM,
  // DELETE_ALBUM
} from "../constants/album";

const initialState = {};

const updateAlbum = (state, payload) => {
  return {...state, ...payload}
}

const getAlbum = (state, payload) => {
  return {...state, ...payload}
}

export default createReducer(initialState, {
  [GET_ALBUM]: getAlbum,
  [UPDATE_ALBUM]: updateAlbum
})