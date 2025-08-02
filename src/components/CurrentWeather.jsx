import { useWeatherContext } from "@/context/WeatherContext";
import { WeatherIcon } from "./common/WeatherIcon";

export const CurrentWeather = () => {
  const { weatherData } = useWeatherContext();
  const { name, main, weather } = weatherData;
  return (
    <div className="text-center py-8">
      <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
      <div className="flex items-center justify-center">
        <WeatherIcon
          iconCode={weather[0].icon}
          description={weather[0].description}
        />
        <div className="ml-4">
          <p className="text-6xl font-bold text-white">
            {Math.round(main.temp)}ºC
          </p>
          <p className="text-xl text-white">{weather[0].main}</p>
        </div>
      </div>
    </div>
  );
};
