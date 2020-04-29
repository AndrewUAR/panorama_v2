import axios from 'axios';
import { apiEndPoint, configHeader } from '../../config.js';

const API_ENDPOINT = apiEndPoint();
const config = configHeader();

export const getCurrentUser = async () => {
  const response = await axios.get(`${API_ENDPOINT}/api/v1/users/me`, config);
  return response;
};

export const updateCurrentUser = async (userData) => {
  const response = await axios.patch(`${API_ENDPOINT}/api/v1/users/updateMe`, userData, {
    withCredentials: true,
    credentials: 'include'
  });
  return response; 
}

export const deleteCurrentUser = async () => {
  const response = await axios.delete(`${API_ENDPOINT}/api/v1/users/deleteMe`, config);
  return response; 
}