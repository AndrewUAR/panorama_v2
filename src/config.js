export const apiEndPoint = () => 'https://photopanorama.herokuapp.com';

export const configHeader = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true,
    credentials: 'include'
  };
  return config;
};
