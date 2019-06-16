import axios from 'axios';

export default () => {
  const object = axios.create({
    baseURL: 'http://localhost:8081',
  });
  return object;
};
