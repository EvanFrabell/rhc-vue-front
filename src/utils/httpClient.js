import axios from 'axios';

const scheme = __APP_ENV__ === 'development' ? 'http' : 'https';
const basePath =
  __APP_ENV__ === 'development' ? 'localhost:3000' : 'fillthisinlater';
const apiPath = '/rhc/api';
export const httpClient = axios.create({
  baseURL: `${scheme}://${basePath}${apiPath}`,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
