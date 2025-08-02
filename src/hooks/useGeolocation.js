import { weatherService } from "@/services/weatherService";
import { useState } from "react";
import { useEffect } from "react";

export const useGeolocation = (defaultLocation) => {
  const [initialLocation, setInitialLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setInitialLocation({ lat: latitude, lon: longitude });
        },
        (err) => {
          console.error(err);
          setInitialLocation(defaultLocation);
        }
      );
    } else {
      setInitialLocation(defaultLocation);
    }
  }, []);

  const fetchGeolocation = async (locationName) => {
    let lat, lon;
    
    const geoData = await weatherService.getGeolocation(locationName);

    if (geoData && geoData.length > 0) {
      lat = geoData[0].lat;
      lon = geoData[0].lon;
    } else {
      throw new Error(`Location "${locationName}" not found.`);
    }

    return { lat, lon };
  };

  return { initialLocation, fetchGeolocation };
};
