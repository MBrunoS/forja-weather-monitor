import { useUnits } from "@/hooks/useUnits";
import { WeatherContext } from "./WeatherContext";
import { useWeatherData } from "@/hooks/useWeatherData";

export const WeatherProvider = ({ children }) => {
  const { weatherData, forecastData, loading, error, fetchWeatherData } =
    useWeatherData();

  const { units, toggleUnits, convertedWeatherData, convertedForecastData } =
    useUnits(weatherData, forecastData);

  return (
    <WeatherContext.Provider
      value={{
        weatherData: convertedWeatherData,
        forecastData: convertedForecastData,
        loading,
        error,
        fetchWeather: fetchWeatherData,
        units,
        toggleUnits,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
