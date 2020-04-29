import axios from 'axios';
import { apiEndPoint, configHeader } from '../../config.js';

const API_ENDPOINT = apiEndPoint();
const config = configHeader();

export const signUpUser = async (userData) => {
  const response = await axios.post(`${API_ENDPOINT}/api/v1/users/signup`, userData, config);
  return response;
}

export const signInUser = async (userData) => {
  const response = await axios.post(`${API_ENDPOINT}/api/v1/users/login`, userData, config);
  return response;
}

export const signOutUser = async () => {
  const response = await axios.get(`${API_ENDPOINT}/api/v1/users/logout`, config);
  console.log('here')
  return response;
}

export const updateMyPassword = async (userData) => {
  const response = await axios.patch(`${API_ENDPOINT}/api/v1/users/updateMyPassword`, userData, {
    withCredentials: true,
    credentials: 'include'
  });
  return response;
}