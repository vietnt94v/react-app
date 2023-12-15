import axios from 'axios';
import { Constants } from './constants';

const axiosInstance = axios.create({
  baseURL: Constants.api,
});

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default axiosInstance;
