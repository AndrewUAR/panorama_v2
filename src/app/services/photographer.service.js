import axios from 'axios';
import { apiEndPoint, configHeader } from '../../config.js';

const API_ENDPOINT = apiEndPoint();
const config = configHeader();

export const createPhotographerProfile = async (photographerData) => {
  const response = await axios.patch(
    `${API_ENDPOINT}/api/v1/photographers/createProfile`,
    photographerData,
    config
  );
  return response;
};

export const getPhotographerProfile = async () => {
  const response = await axios.get(
    `${API_ENDPOINT}/api/v1/photographers/myProfile`,
    config
  );
  return response;
};

export const getAllPhotographers = async (query) => {
  const {
    distance = 100,
    coordinates,
    unit = 'mi',
    sort,
    page,
    limit = '3'
  } = query;
  const coordsToStr = coordinates.join(',');

  const response = await axios.get(
    `${API_ENDPOINT}/api/v1/photographers/photographers-within/${distance}/center/${coordsToStr}/unit/${unit}?sort=${sort}&page=1&limit=3`,
    config
  );
  return response;
};
