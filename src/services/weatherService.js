import { API_CONFIG } from "@/utils/constants";
import { api } from "./api";

export const weatherService = {
  getCurrentWeather: (lat, lon) => api.get(`${API_CONFIG.WEATHER_PATH}/weather?lat=${lat}&lon=${lon}`), // https://openweathermap.org/current
  getForecast: (lat, lon) => api.get(`${API_CONFIG.WEATHER_PATH}/forecast?lat=${lat}&lon=${lon}`),  // https://openweathermap.org/forecast5
  getGeolocation: (locationName) => api.get(`${API_CONFIG.GEOLOCATION_PATH}?q=${locationName}&limit=1`) // https://openweathermap.org/api/geocoding-api
}