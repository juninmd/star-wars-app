import axios from 'axios';
import { API_BASE_URL } from '../config';

const baseURL = API_BASE_URL;

export const getFilms = async () => {
  return axios.request({ baseURL, url: 'films' })
}

export const getFilmById = async (id: number) => {
  return axios.request({ baseURL, url: `films/${id}` })
}
