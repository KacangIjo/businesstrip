import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

// function initService() {}

export const api = axios.create({
  baseURL: 'https://api.afc.staging-traveloka.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export function createInterceptors() {
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // Do something before request is sent
      if (Cookies.get(`${process.env.REACT_APP_APP_CLIENT_ID}`)) {
        config.headers = {
          ...config.headers,
          Authorization: Cookies.get(`bt.token`),
        };
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const status: number = error.response ? error.response.status : 0;
      if ([401, 403].includes(status)) {
        return Promise.reject('Silahkan Login lagi');
      }
      return Promise.reject(error);
    },
  );
}
