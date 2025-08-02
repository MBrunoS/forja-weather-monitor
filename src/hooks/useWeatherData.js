import { useState } from "react";
import { useGeolocation } from "./useGeolocation";
import { DEFAULT_LOCATION } from "@/utils/constants";
import { useEffect } from "react";
import { weatherService } from "@/services/weatherService";

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { initialLocation, fetchGeolocation } =
    useGeolocation(DEFAULT_LOCATION);

  const fetchWeatherData = async (searchLocation = null) => {
    if (!(searchLocation || initialLocation)) return;

    setLoading(true);
    setError(null);
    setWeatherData(null);
    setForecastData(null);

    try {
      const coords = searchLocation
        ? await fetchGeolocation(searchLocation)
        : initialLocation;

      if (!coords) {
        throw new Error("Location not found.");
      }

      const [weather, forecast] = await Promise.all([
        weatherService.getCurrentWeather(coords.lat, coords.lon),
        weatherService.getForecast(coords.lat, coords.lon),
      ]);

      setWeatherData(weather);
      setForecastData(forecast);
    } catch (error) {
      setError(error.message || "Error fetching weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!initialLocation) return;
    fetchWeatherData();
  }, [initialLocation]);

  return {
    weatherData,
    forecastData,
    loading,
    error,
    fetchWeatherData,
  }
}
