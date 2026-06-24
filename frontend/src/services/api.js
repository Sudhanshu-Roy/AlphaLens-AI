// src/services/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "https://alphalens-ai-1.onrender.com"
});

export default api;
