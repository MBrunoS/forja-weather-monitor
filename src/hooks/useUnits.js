import { toFahrenheit, toMph } from "@/utils/temperature"
import { useMemo } from "react"
import { useState } from "react"

export const useUnits = (weatherData, forecastData) => {
  const [units, setUnits] = useState("metric")

  const toggleUnits = () => {
    setUnits(prev => prev === "metric" ? "imperial" : "metric")
  }

  const convertedWeatherData = useMemo(() => {
    if (!weatherData) return null

    if (units === "metric") {
      return weatherData
    }

    return {
      ...weatherData,
      main: {
        ...weatherData.main,
        temp: toFahrenheit(weatherData.main.temp),
        feels_like: toFahrenheit(weatherData.main.feels_like),
      },
      wind: {
        ...weatherData.wind,
        speed: toMph(weatherData.wind.speed),
      }
    }
  }, [weatherData, units])

  const convertedForecastData = useMemo(() =>{
    if (!forecastData) return null

    if (units === "metric") {
      return forecastData
    }

    return {
      ...forecastData,
      list: forecastData.list.map(item => ({
        ...item,
        main: {
          ...item.main,
          temp: toFahrenheit(item.main.temp),
        }
      }))
    }
  }, [forecastData, units])

  return { units, toggleUnits, convertedWeatherData, convertedForecastData }
}