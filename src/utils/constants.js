export const API_CONFIG = {
  API_KEY: import.meta.env.VITE_WEATHER_API_KEY,
  BASE_URL: 'https://api.openweathermap.org',
  GEOLOCATION_PATH: '/geo/1.0/direct',
  WEATHER_PATH: '/data/2.5',
  FORECASTING_DAYS: 5,
  UNITS: 'metric',
  ICON_URL: 'https://openweathermap.org/img/wn/',
  ICON_SIZE: '2x',
};

export const DEFAULT_LOCATION = {
  lat: 40.7128, // Default latitude for New York City
  lon: -74.0060 // Default longitude for New York City
}