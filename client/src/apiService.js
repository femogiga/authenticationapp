import axios from 'axios';

const baseUrl = 'http://localhost:9000';

const create = (url, data) => {
  return axios.post(`${baseUrl}${url}`, data);
};

export default { create };
