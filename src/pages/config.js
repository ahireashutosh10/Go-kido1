// src/pages/config.js

const isProduction = import.meta.env.MODE === 'production';

export const API_BASE_URL = isProduction
  ? 'https://testapp.gokidogo.com/webapi'
  : '/api';
