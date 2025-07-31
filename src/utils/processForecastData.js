export const processForecastData = (forecastList) => {
  const dailyData = {};

  forecastList.forEach((item) => {
    // Get date in YYYY-MM-DD format
    const date = new Date(item.dt * 1000).toISOString().split("T")[0];

    const todayDate = new Date().toISOString().split("T")[0];
    // Skip today's data to avoid showing current weather in the forecast
    if (date === todayDate) {
      return;
    }

    // Initialize the date entry if it doesn't exist
    if (!dailyData[date]) {
      dailyData[date] = {
        temps: [],
        weather: [],
      };
    }
    // Add temperature and weather to the date entry
    dailyData[date].temps.push(item.main.temp);
    dailyData[date].weather.push(item.weather[0]);
  });

  return Object.keys(dailyData)
    .slice(0, 5)
    .map((date) => {
      const dayInfo = dailyData[date];
      const high = Math.round(Math.max(...dayInfo.temps));
      const low = Math.round(Math.min(...dayInfo.temps));
      // Use the weather of the first forecast of the day as representative
      const representativeWeather = dayInfo.weather[0];

      return {
        day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
        high,
        low,
        icon: representativeWeather.icon,
        description: representativeWeather.description,
      };
    });
};
