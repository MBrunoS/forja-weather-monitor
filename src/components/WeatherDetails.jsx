import { useWeatherContext } from "@/context/WeatherContext";
import { Thermometer } from "lucide-react";
import { WindIcon } from "lucide-react";
import { DropletIcon } from "lucide-react";

export const WeatherDetails = () => {
  const { weatherData } = useWeatherContext();
  const { main, wind } = weatherData;
  return (
    <section className="grid grid-cols-3 gap-4 bg-white/20 rounded-2xl p-4 mb-6">
      <div className="flex flex-col items-center p-2">
        <DropletIcon className="text-blue-700 mb-2" />
        <div className="text-sm text-white">Humidity</div>
        <div className="sm:text-xl font-semibold text-white">
          {main.humidity}%
        </div>
      </div>

      <div className="flex flex-col items-center p-2">
        <WindIcon className="text-blue-700 mb-2" />
        <div className="text-sm text-white">Wind</div>
        <div className="sm:text-xl font-semibold text-white">
          {wind.speed.toFixed(2)} m/s
        </div>
      </div>

      <div className="flex flex-col items-center p-2">
        <Thermometer className="text-blue-700 mb-2" />
        <div className="text-sm text-white">Fees Like</div>
        <div className="sm:text-xl font-semibold text-white">
          {Math.round(main.feels_like)}°C
        </div>
      </div>
    </section>
  );
};
