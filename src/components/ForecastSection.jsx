import { processForecastData } from "@/utils/processForecastData";
import { WeatherIcon } from "./common/WeatherIcon";
import { useWeatherContext } from "@/context/WeatherContext";

export const ForecastSection = () => {
  const { forecastData } = useWeatherContext();
  const processedForecast = processForecastData(forecastData.list);
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
        {processedForecast.map((day) => (
          <div
            className="bg-white/20 rounded-xl p-3 text-center sm:last:col-span-2 md:last:col-span-1"
            key={day.day}
          >
            <div className="text-sm text-white mb-2">{day.day}</div>
            <div className="flex justify-center mb-2">
              <WeatherIcon iconCode={day.icon} description={day.description} />
            </div>
            <div className="text-sm font-semibold text-white">{day.high}°C</div>
            <div className="text-sm text-gray-200">{day.low}°C</div>
          </div>
        ))}
      </div>
    </section>
  );
};
