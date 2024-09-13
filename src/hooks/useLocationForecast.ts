import { useEffect, useState } from "react";
import { ForecastParams } from "../interface/Forecast";
import { getLocationForecast } from "../api/services/dashboard/dashboard";
import { ForecastData } from "../interface/ForecastData";

export const useLocationForecast = () => {
  const [locationForecast, setLocationForecast] = useState<ForecastData | null>(
    null
  );
  const [isLoading, setLoading] = useState(true);
  const userLocation: ForecastParams = {
    latitude: 14.6481,
    longitude: 121.1133,
    current: "temperature_2m,rain,surface_pressure,wind_speed_10m,weather_code",
    hourly:
      "temperature_2m,rain,surface_pressure,vapour_pressure_deficit,wind_speed_80m",
    timezone: "Asia/Singapore",
    forecast_days: 1,
  };

  useEffect(() => {
    getLocationForecast(userLocation)
      .then((response) => {
        setLocationForecast(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { locationForecast, isLoading };
};
