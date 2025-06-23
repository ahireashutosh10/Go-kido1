// src/pages/config.js

export const API_BASE_URL = import.meta.env.PROD
  ? 'https://your-backend-host.onrender.com'  // use your Render or Railway deployed URL here
  : 'http://localhost:5000';
