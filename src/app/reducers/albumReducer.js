import { createReducer } from '../helper/reducerUtils';
import {
  CREATE_ALBUM,
  GET_ALBUM,
  GET_ALL_ALBUMS,
  UPDATE_ALBUM,
  DELETE_ALBUM
} from '../constants/album';

const initialState = {
  albums: [],
  selectedAlbum: {}
};

const updateAlbum = (state, payload) => ({
  ...state,
  selectedAlbum: payload
});

const getAlbum = (state, payload) => ({
  ...state,
  selectedAlbum: payload
});

const getAllAlbums = (state, payload) => ({
  ...state,
  albums: payload
});

const deleteAlbum = (state, payload) => ({
  ...state,
  selectedAlbum: payload
});

const createAlbum = (state, payload) => ({
  ...state,
  selectedAlbum: payload
});

export default createReducer(initialState, {
  [GET_ALBUM]: getAlbum,
  [UPDATE_ALBUM]: updateAlbum,
  [GET_ALL_ALBUMS]: getAllAlbums,
  [CREATE_ALBUM]: createAlbum,
  [DELETE_ALBUM]: deleteAlbum
});
