import { useWeatherContext } from "@/context/WeatherContext";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchWeather } = useWeatherContext();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(searchTerm.trim());
    setSearchTerm("");
  };

  return (
    <form className="relative flex-1" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search location..."
        className="w-full bg-white/20 border border-white/30 rounded-full py-3 px-6 text-white placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-white/30"
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full p-2 hover:bg-white/40 transition hover:cursor-pointer"
      >
        <SearchIcon size={20} className="text-white" />
      </button>
    </form>
  );
};
