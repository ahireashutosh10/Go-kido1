// src/pages/config.js

const isProduction = import.meta.env.MODE === 'production';

export const API_BASE_URL = isProduction
  ? 'https://your-backend-host.com'
  :  'http://localhost:5000';
