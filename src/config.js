export const apiEndPoint = () => 'http://localhost:8000';

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
