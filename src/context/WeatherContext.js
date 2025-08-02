import { useContext } from "react";
import { createContext } from "react"

export const WeatherContext = createContext()

export const useWeatherContext = () => {
  const context = useContext(WeatherContext)

  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }

  return context
}
