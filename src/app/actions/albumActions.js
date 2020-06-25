import { 
  GET_ALL_ALBUMS, 
  GET_ALBUM, 
  CREATE_ALBUM, 
  UPDATE_ALBUM
} from '../constants/album.js';
import { SET_ERROR } from "../constants/error";
import { 
  asyncActionStart, 
  asyncActionFinish, 
  asyncActionError 
} from "./asyncActions";
import { 
  createNewAlbum, 
  getAllMyAlbums, 
  getAlbum,
  updateMyAlbum,
  uploadImages,
  deleteImages,
  deleteAlbum 
} from "../services/album.service";

export const createAlbum = (albumData) => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const res = await createNewAlbum(albumData);
    const album = res.data.data;
    dispatch(asyncActionFinish());
    dispatch({
      type: CREATE_ALBUM,
      payload: album
    })
  } catch (err) {
    if (err.response.data.message){
      dispatch(asyncActionError());
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
    }
  }
}

export const updateAlbum = (albumData , id) => async dispatch => {
  try {
    const res = await updateMyAlbum(albumData, id);
    const album = res.data.data;
    dispatch({
      type: UPDATE_ALBUM,
      payload: album
    })
  } catch (err) {
    if (err.response.data.message){
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
    }
  }
}

export const getAllAlbums = () => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const res = await getAllMyAlbums();
    const albums = res.data.data.albums;
    dispatch(asyncActionFinish());
    dispatch({
      type: GET_ALL_ALBUMS,
      payload: albums
    })
  } catch (err) {
    if (err.response.data.message){
      dispatch(asyncActionError());
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
    }
  }
}

export const selectAlbum = (id, history) => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const res = await getAlbum(id);
    const album = res.data.data;
    dispatch(asyncActionFinish());
    dispatch({
      type: GET_ALBUM,
      payload: album
    })
    history.push(`/my-profile/albums/${id}`);
  } catch (err) {
    if (err.response.data.message){
      dispatch(asyncActionError());
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
    }
  }
}

export const uploadAlbumImages = (images, id) => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const res = await uploadImages(images, id);
    const album = res.data.data;
    dispatch(asyncActionFinish());
    dispatch({
      type: GET_ALBUM,
      payload: album
    })
  } catch (err) {
    if (err.response.data.message){
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
    }
  }
}

export const deleteAlbumImages = (images, id) => async dispatch => {
  try {
    const res = await deleteImages(images, id);
    const album = res.data.data;
    dispatch({
      type: GET_ALBUM,
      payload: album
    })
  } catch (err) {
    if (err.response.data.message){
      dispatch(asyncActionError());
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
    }
  }
}

export const deleteMyAlbum = (images, id, history) => async dispatch => {
  try {
    await deleteAlbum(images, id);
    dispatch({
      type: GET_ALBUM,
      payload: ''
    })
    history.push('/my-profile/albums')
  } catch (err) {
    if (err.response.data.message){
      dispatch(asyncActionError());
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.message
      })
    }
  }
}