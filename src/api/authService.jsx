// src/api/authService.js
import axios from 'axios';

const API_BASE_URL = 'https://your-api-endpoint.com'; // replace with your actual backend URL

export const loginUser = (formData) => {
  return axios.post(`${API_BASE_URL}/login`, formData);
};

export const signupUser = (formData) => {
  return axios.post(`${API_BASE_URL}/signup`, formData);
};
