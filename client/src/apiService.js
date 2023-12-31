import axios from 'axios';

const baseUrl = 'http://localhost:9000';
const token = localStorage.getItem('token');

const create = (url, data) => {
  return axios.post(`${baseUrl}${url}`, data);
};

const get = (url) => {
  return axios.get(`${baseUrl}${url}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

export default { create, get };
