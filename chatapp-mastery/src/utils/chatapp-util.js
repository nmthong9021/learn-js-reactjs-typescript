import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.chatengine.io/',
  timeout: 5000,
  // headers: {
  //   'X-Access-Token': 'accessToken'
  // }
});