export const UnitSelector = ({ units, toggleUnits }) => (
  <div className="flex items-center justify-center bg-white/20 border border-white/30 rounded-full overflow-hidden">
    <button
      onClick={toggleUnits}
      className={`px-4 py-2 transition text-white cursor-pointer ${
        units === "metric" ? "bg-blue-500" : ""
      }`}
      disabled={units === "metric"}
    >
      °C
    </button>
    <button
      onClick={toggleUnits}
      className={`px-4 py-2 transition text-white cursor-pointer ${
        units === "imperial" ? "bg-blue-500" : ""
      }`}
      disabled={units === "imperial"}
    >
      °F
    </button>
  </div>
);
