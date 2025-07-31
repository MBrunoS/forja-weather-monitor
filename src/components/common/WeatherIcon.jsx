import { API_CONFIG } from "@/utils/constants";

export const WeatherIcon = ({ iconCode, description }) => {
  const iconUrl = `${API_CONFIG.ICON_URL}${iconCode}@${API_CONFIG.ICON_SIZE}.png`;
  return <img src={iconUrl} alt={description} />;
};
