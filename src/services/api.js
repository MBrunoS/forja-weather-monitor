import { API_CONFIG } from "../utils/constants";

export const api = {
  get: async (endpoint) => {
    const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}&units=${API_CONFIG.UNITS}&appid=${API_CONFIG.API_KEY}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return await response.json();
  }
}