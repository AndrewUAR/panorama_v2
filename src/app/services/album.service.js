import axios from 'axios';
import { apiEndPoint, configHeader } from '../../config.js';

const API_ENDPOINT = apiEndPoint();
const config = configHeader();

export const createNewAlbum = async (albumData) => {
  const response = await axios.post(
    `${API_ENDPOINT}/api/v1/albums`,
    albumData,
    config
  );
  return response;
};

export const updateMyAlbum = async (albumData, id) => {
  const response = await axios.patch(
    `${API_ENDPOINT}/api/v1/albums/${id}`,
    albumData,
    config
  );
  return response;
};

export const getAllMyAlbums = async () => {
  const response = await axios.get(`${API_ENDPOINT}/api/v1/albums`, config);
  return response;
};

export const getAlbum = async (id) => {
  const response = await axios.get(
    `${API_ENDPOINT}/api/v1/albums/${id}`,
    config
  );
  return response;
};

export const uploadImages = async (images, id) => {
  const response = await axios.patch(
    `${API_ENDPOINT}/api/v1/albums/${id}/uploadImages`,
    images,
    {
      withCredentials: true,
      credentials: 'include'
    }
  );
  return response;
};

export const deleteImages = async (images, id) => {
  const response = await axios.patch(
    `${API_ENDPOINT}/api/v1/albums/${id}/deleteImages`,
    { images },
    config
  );
  return response;
};

export const deleteAlbum = async (images, id) => {
  const response = await axios.delete(
    `${API_ENDPOINT}/api/v1/albums/${id}`,
    { images },
    config
  );
  return response;
};
