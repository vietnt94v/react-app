'use client';
import axios from 'axios';
import { Constants } from './constants';

const axiosInterceptor = axios.create({
  baseURL: Constants.api_auth,
});

axiosInterceptor.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInterceptor.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default axiosInterceptor;
