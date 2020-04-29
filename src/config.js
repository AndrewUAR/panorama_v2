export const apiEndPoint = () => {
  return 'http://localhost:8000'
}

export const configHeader = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true,
    credentials: 'include'
  }
  return config;
}