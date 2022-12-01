import { api } from './api';
import axios from 'axios';

export function getAccessToken() {
  return api.post('/oauth/accesstoken', {
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
  });
}

export function getAirports() {
  return axios.get('/data/flight.json');
}
