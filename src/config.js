export const apiEndPoint = () => 'https://photopanorama.herokuapp.com';

export const configHeader = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true,
    credentials: 'include'
  };
  return config;
};
