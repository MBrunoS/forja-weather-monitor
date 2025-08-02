import { UnitSelector } from "./components/common/UnitSelector";
import { CurrentWeather } from "./components/CurrentWeather";
import { ForecastSection } from "./components/ForecastSection";
import { SearchBar } from "./components/SearchBar";
import { WeatherDetails } from "./components/WeatherDetails";
import { Skeleton } from "./components/common/Skeleton";
import { useWeatherContext } from "./context/WeatherContext";

export function App() {
  const { loading, error, weatherData, forecastData } = useWeatherContext();

  return (
    <div className="flex w-full min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4 md:p-8 items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-white/20 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <SearchBar />
            <UnitSelector />
          </div>

          {loading && <Skeleton />}
          {error && <p className="text-white text-center">{error}</p>}

          {weatherData && (
            <>
              <CurrentWeather />
              <WeatherDetails />
            </>
          )}

          {forecastData && <ForecastSection />}
        </div>
      </div>
    </div>
  );
}
